#モジュールの読み込み
from PIL import Image

from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy #sql
from flask_bcrypt import Bcrypt
import os

app = Flask(__name__) #flaskアプリケーションのインスタンスを作成

# 画像を保存するフォルダの指定
Upload_folder = 'static/uploads' #flaskの中にあるstatic/uploadsに画像を保存するため
app.config['UPLOAD_FOLDER'] = Upload_folder #ディレクトリパスの指定をしている

# データベース設定
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///images.db' #SQLliteのデータベースを指定
db = SQLAlchemy(app) #FlaskとSQLの連携

# 画像モデル
class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True) #連番（自動）
    #いらない　filename = db.Column(db.String(100), nullable=False) #uploadするファイルの名前100文字まで
    user_id = db.Column(db.String(50), nullable=False)  # 50字まで　ユーザーごとに管理

# データベース作成
with app.app_context():
    db.create_all()

# ホームページ（画像アップロードフォームと画像一覧）
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        user_id = request.form["user_id"]
        file = request.files["file"]
        if file:
            #いらない　filename = secure_filename(file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)

            # データベースに保存
            new_image = Image(filename=filename, user_id=user_id)
            db.session.add(new_image)
            db.session.commit()

            return redirect(url_for("index"))

    images = Image.query.all()
    return render_template("index.html", images=images)

if __name__ == '_main_':
    app.run(debug = True)

