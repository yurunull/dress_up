from flask import Flask, request, jsonify, session, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS

# Flaskアプリケーションの設定
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # SQLiteデータベース
app.config['SECRET_KEY'] = 'your_secret_key'  # セッション管理用
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
CORS(app)  # CORSを有効化

# ユーザーモデル
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)

# 初回実行時にデータベースを作成
with app.app_context():
    db.create_all()

# ホームページ
@app.route('/')
def home():
    return render_template('home.jsx')#ホームページを呼ぶ　変更済

# ユーザー登録
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'ユーザー名とパスワードを入力してください。'}), 400

    # ユーザー名が既に存在する場合
    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({'message': 'そのユーザー名はすでに使用されています。'}), 400

    # パスワードをハッシュ化
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # 新しいユーザーをデータベースに追加
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_use
