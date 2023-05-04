from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify("Home")

@app.route('/about')
def about():
    data: str = """
    Great heroes and diabolical villains are the types of characters that people aspire to be - but not Cid Kagenou. 
    He wishes to become the true mastermind behind everything, pulling the strings and making his machinations drive the entire story. 
    In his previous life in modern Japan, he failed to achieve his goals. But now, reborn in a world of magic, he will show the true eminence of the shadow! 
    As Cid pretends to be just another ordinary character in the mafia, he recruits members for his Shadow Garden organization, with the goal of taking 
    down the mysterious cult lurking in the shadows. With many improvisations, Cid leads his organization against the vile Diabolos Cult.
    """

    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/news')
def news():
    data = {
        "principais": [
            {"titulo": "ANALYSIS: Why the Shonen Jump's Dark Trinity are the new Big Three of anime", "image":"https://img1.ak.crunchyroll.com/i/spire2/4553d4914f4afb618fe91046061578901681945204_thumb.jpg"},
            {"titulo": "Crunchyroll release calendar for the week of May 1st to 7th", "image":"https://img1.ak.crunchyroll.com/i/spire4/9d7be9ff16affa3953db7b1c28553a871682346184_thumb.png"}
        ],
        "recentes": [
            {"titulo": "Demon Slayer: Kimetsu no Yaiba and Chainsaw Man to get complete collection boxes by Panini", "image":"https://img1.ak.crunchyroll.com/i/spire4/3701f78b1b4044ae0c8422f9fe32d49a1683106241_thumb.jpg"},
            {"titulo": "Berserk to be published again in July by Panini", "image":"https://img1.ak.crunchyroll.com/i/spire2/eba652c53572ed550274522697ee3f041683104336_thumb.jpg"},
            {"titulo": "Miraculous: Ladybug and Cat Noir to be published in July by Panini", "image":"https://img1.ak.crunchyroll.com/i/spire4/eb57788f4c9579bba4c2e8f3f300a9981683102072_thumb.png"},
            {"titulo": "Speed up with the new trailer and poster of Gran Turismo live-action movie", "image":"https://img1.ak.crunchyroll.com/i/spire2/7fb7ae8e18ca7bdc5dfd90b1c67508101683060681_thumb.jpg"},
            {"titulo": "Elden Ring artbooks to be released in July by Panini", "image":"https://img1.ak.crunchyroll.com/i/spire4/55c46275e823844e9b2abfe5d57f81831683101407_thumb.png"},
            {"titulo": "Saint Seiya: The Beginning, the movie of Knights of the Zodiac, premieres in the top 3 of Brazilian cinemas", "image":"https://img1.ak.crunchyroll.com/i/spire3/52948da327b65dd9f745f3d5e24ce4721683073772_thumb.jpg"}
        ]
    }

    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)