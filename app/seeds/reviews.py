from app.models import db, User, Review, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1  = Review(userId=2, body="Really enjoyed my stay at Jefs Loft! Though much to my surprise, the owner's name is not actually Jef... would recommend though", rating=4, spotId=1)
    review2  = Review(userId=3, body='Jefs a real nice guy', rating=4, spotId=1)
    review3  = Review(userId=4, body='I used to stay here when it was ran by Gef..I miss him.', rating=1, spotId=1)
    review5  = Review(userId=1, body='I didnt know what the word hovel meant. At least they were honest?', rating=2, spotId=2)
    review6  = Review(userId=3, body='Nice spot to relax with friends or family. Prime fishing location as well,  the hubby caught a whole shark!', rating=5, spotId=2)
    review7  = Review(userId=4, body='The bugs were terrible', rating=1, spotId=2)
    review8  = Review(userId=5, body='I was weirded out having to walk through the owners backyard to leave. One night I think they were skinny dipping!', rating=2, spotId=3)
    review9  = Review(userId=6, body='This location was quite nice. My partner is madly obsessed with cute decor and I figured why not find the cutest place near us!', rating=4, spotId=3)
    review10 = Review(userId=7, body='The decor was too cute...', rating=1, spotId=3)
    review12 = Review(userId=1, body='Perfect to escape my roommates for a few days.', rating=5, spotId=4)
    review13 = Review(userId=7, body='The neighbors are all drunk college kids that will keep you up all night', rating=2, spotId=4)
    review14 = Review(userId=8, body='Came to visit my daughter and felt right at home', rating=5, spotId=4)
    review15 = Review(userId=10, body="i didn't know there were going to be lots of scary people with guns all around here. I was afraid the whole time", rating=2, spotId=5)
    review16 = Review(userId=8, body="To be completely honest, my family and I do not know anything about hunting so it was quite strange for my husband to choose this location.  My family and I got lost and couldn't find our way back to the shack many times. We even got caught out in the rain for hours because we were lost.", rating=1, spotId=5)
    review17 = Review(userId=4, body='Got myself a turkey!', rating=5, spotId=5)
    review19 = Review(userId=5, body="Life is pretty hard. I went here to get away from all of my problems and boy was it what I needed. Nothing beats being one with nature while also having a toilet", rating=5, spotId=6)
    review20 = Review(userId=4, body="I am leaving this review because I am still stuck on the mountain and unable to find my way off the mountain. Please send help, rating:HELP", rating=3, spotId=6)
    review21 = Review(userId=9, body='Perfect scenery', rating=4, spotId=6)
    review22 = Review(userId=8, body="Don't listen to the previous reviewers gripe about Ben's horses. I personally enjoyed riding them", rating=5, spotId=7)
    review23 = Review(userId=11, body='The ranch was beautiful but the  rancher Ben was a little weird. He kept asking us to ride his horse...', rating=3, spotId=7)
    review45 = Review(userId=1, body='Not what I expected but a fun trip', rating=4, spotId=7)
    review24 = Review(userId=1, body='The food at the downstairs bar was fantastic', rating=5, spotId=8)
    review25 = Review(userId=2, body='The bar downstairs was too noisy!', rating=2, spotId=8)
    review26 = Review(userId=3, body='We spent the night here before the show and had a blast. Cant beat walking distance!', rating=3, spotId=8)
    review27 = Review(userId=4, body='Sand got everywhere but otherwise fine', rating=4, spotId=9)
    review28 = Review(userId=5, body='You can hear the waves while you sleep!', rating=5, spotId=9)
    review29 = Review(userId=2, body='Only minutes from the beach.', rating=4, spotId=9)
    review30 = Review(userId=6, body='I am a tiny person and feel very out of place in regular sized homes so I was very relieved that this home was offered. I felt very comfortable with the sizes of everything in the house and it made me and my family feel very welcome.', rating=5, spotId=10)
    review31 = Review(userId=8, body='I wanted to try tiny living before committing to the lifestyle. Not for me but not the host fault.', rating=5, spotId=10)
    review32 = Review(userId=6, body='Centrally located', rating=5, spotId=11)
    review33 = Review(userId=3, body='IT WAS SO SMALL. THESE CITY PEOPLE ARE CRAZY', rating=1, spotId=11)
    review34 = Review(userId=1, body='Great amount of space for the area', rating=4, spotId=11)
    review35 = Review(userId=2, body="This place is absolutely horrendous. There was marker lines all over the wall, it looked like someone graffitied all over the place. Would not stay here again", rating=1, spotId=12)
    review36 = Review(userId=9, body='I am an avid Makers Mark enjoyer and it was absolutely incredible to stay at the legendary home of the creator of Makers Mark. It was surreal the amount of amenities provided, even within the bedrooms!', rating=4, spotId=12)
    review37 = Review(userId=3, body='Not so sure about the historic claims but it was a nice stay', rating=4, spotId=12)
    review38 = Review(userId=4, body="I am from Texas and I am as cowboy as cowboy can be. It was nice to find a place where me and my buddies can kick up our boots, park our horses, and play poker worry-free. This was the perfect place. Yeehaw!", rating=5, spotId=13)
    review39 = Review(userId=8, body='Nothing like the smell of a farm!', rating=5, spotId=13)
    review40 = Review(userId=2, body='Everything was great!', rating=4, spotId=13)
    review41 = Review(userId=1, body='The donuts were kind of stale', rating=2, spotId=14)
    review42 = Review(userId=6, body='Donuts are my life and I was thrilled to find out that there was a whole lodge dedicated to donuts. Life is complete! Amazing stay would recommend 10/10', rating=5, spotId=14)
    review44 = Review(userId=5, body='The host was so nice!', rating=5, spotId=15)
    review45 = Review(userId=4, body='Reminded me of my childhood home, thats not a good thing', rating=3, spotId=15)
    review46 = Review(userId=1, body='It was nice to get away from the all the city noise!', rating=5, spotId=15)
    review47 = Review(userId=2, body='I really could feel the creative flowing through the space', rating=4, spotId=16)
    review50 = Review(userId=10, body='Great location!', rating=3, spotId=17)
    review51 = Review(userId=11, body='Kind of small but the owner was really nice', rating=4, spotId=17)
    review52 = Review(userId=9, body="I live in the city and don't have access to any beaches so this quaint apartment was the perfect getaway for me and my husband", rating=5, spotId=17)
    db.session.add_all([
                        review1,
                        review2,
                        review3,
                        review5,
                        review6,
                        review7,
                        review8,
                        review9,
                        review10,
                        review12,
                        review13,
                        review14,
                        review15,
                        review16,
                        review17,
                        review19,
                        review20,
                        review21,
                        review22,
                        review23,
                        review45,
                        review24,
                        review25,
                        review26,
                        review27,
                        review28,
                        review29,
                        review30,
                        review31,
                        review32,
                        review33,
                        review34,
                        review35,
                        review36,
                        review37,
                        review38,
                        review39,
                        review40,
                        review41,
                        review42,
                        review44,
                        review45,
                        review46,
                        review47,
                        review50,
                        review51,
                        review52,
                                            ])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()


# 'Jefs Loft'
# 'Lakeside Hovel'
# 'Cutesy Guest House'
# 'Hunting Shack'
# 'Mountain Getaway'
# 'Bens Ranch'
# 'Jens Beachhouse'
# 'Ohio Tinyhome'
# 'Brooklyn Bedroom'
# 'The Marker Home'
# 'Modern Cowboy Suite'
# 'Donuts Lodge'
# 'Country Home'
# 'Artist Studio'
# 'Bayside Apartment'
