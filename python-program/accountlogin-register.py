#print("test!")
#print("これはアカウント登録とログインのプログラムです")

from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
import os

# Flaskアプリを作成
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SECRET_KEY'] = 'your_secret_key'  # セッション管理用
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

# ユーザーモデル
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
   # email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)

# 初回実行時にデータベースを作成
with app.app_context():
    db.create_all()

# ホームページ
@app.route('/')
def home():
    return render_template('home.jsx')#ホームページを呼ぶ　変更

# ユーザー登録
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        #email = request.form['email']
        password = request.form['password']
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        new_user = User(username=username, password=hashed_password) #emailを使う場合はここにemail=email
        db.session.add(new_user)
        db.session.commit()

        flash("登録が完了しました！ログインしてください。", "success")
        return redirect(url_for('login'))

    return render_template('register.html') #登録画面の表示

# ログイン処理
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        #email = request.form['email']
        password = request.form['password']
        user = User.query.first() #query.filter_by(email=email).first()

        if user and bcrypt.check_password_hash(user.password, password):
            session['user_id'] = user.id
            session['username'] = user.username
            flash(f"ようこそ、{user.username} さん！", "success")
            return redirect(url_for('dashboard'))
        else:
            flash("ログインに失敗しました。パスワードが間違っています。", "danger")

    return render_template('login.html') #ログイン画面の表示

# ダッシュボード（ログイン後のページ）
@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        flash("ログインが必要です。", "warning")
        return redirect(url_for('login'))
    return render_template('dashboard.html', username=session['username']) #ログイン後の画面を表示

# ログアウト処理
@app.route('/logout')
def logout():
    session.pop('user_id', None)
    session.pop('username', None)
    flash("ログアウトしました。", "info")
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
