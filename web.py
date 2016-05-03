import os 
from flask import Flask, render_template
app = Flask(__name__)

def main():
    return render_template('index.html')
    
app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', 8080))) 

if __name__ == '__main__':
    app.run()
    app.debug = True