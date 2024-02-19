from flask import Flask, render_template
import pymysql

app = Flask(__name__)

db = pymysql.connect (
	host = '127.0.0.1',
    user = 'root',
    password = 'Eotjd0101^^',
    db='new_project',
    charset='utf8mb4'
)

cur = db.cursor()
sql = "SELECT brand, product_sub_title, launching_price, recent_price, wish_count  FROM items"
cur.execute(sql)

kream_data = cur.fetchall()


@app.route('/')
def index():
	return render_template('index.html', data_list = kream_data)

if __name__ == '__main__':
	app.debug = True
	app.run