from app.models import db, User, Spot, SpotImage, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_spots():
    spot1 = Spot(name='Jefs Loft',description='Enjoy this nice loft in near the wonderful sites of NYC.', address='1973 Old Dear Lane', city='New York', state='New York', country='US', price=300, ownerId=1 )
    spot2 = Spot(name='Lakeside Hovel', description='Its not much buts the location makes up for it!', address='3930 Cunningham Court', city='Birmingham', state='Michigan', country='US', price=200, ownerId=2 )
    spot3 = Spot(name='Cutesy Guest House', description='Built with guest in mind!', address='3421 Mount Street', city='Harrison', state='Michigan', country='US', price=400, ownerId=3 )
    spot4 = Spot(name='College Paradise', description='Located within biking distance to cafes and the local college.', address='2171 Counts Lane', city='Hartford', state='Connecticut', country='US', price=150, ownerId=4 )
    spot5 = Spot(name='Hunting Shack', description='Spend a weekend away in 30 acres. Hunting allowed in season.', address='3603 Turnpike Drive', city='Huntsville', state='Alabama', country='US', price=160, ownerId=5 )
    spot6 = Spot(name='Mountain Getaway', description='Only miles from the slopes. Enjoy our cozy cabin after a day in the cold.', address='3624 Wakefield Street', city='Jenkintown', state='Pennsylvania', country='US', price=322, ownerId=6 )
    spot7 = Spot(name='Bens Ranch', description='Come for the fresh air stay for the cows.', address='4307 Glen Street', city='Columbia', state='Kentucky', country='US', price=354, ownerId=1 )
    spot8 = Spot(name='Downtown Bunagloo', description='Only minutes from the broadway theatre and a short walk from 5 start dining.', address='3233 Aaron Smith Drive', city='Richfield', state='Pennsylvania', country='US', price=300, ownerId=2 )
    spot9 = Spot(name='Jens Beachhouse',description='Sand and sun year round at Jens Beach House!',  address='1339 Hillcrest Lane', city='Irvine', state='California', country='US', price=56, ownerId=3 )
    spot10 = Spot(name='Ohio Tinyhome', description='Everything you could ever want in a small package', address='2173 Hill Street', city='Nova', state='Ohio', country='US', price=80, ownerId=4 )
    spot11 = Spot(name='Brooklyn Bedroom',description='It does the job and theres so much closeby you wont be staying inside anyway.',  address='1545 Davis Avenue', city='New York', state='New York', country='US', price=376, ownerId=5 )
    spot12 = Spot(name='The Marker Home', description='Gorgeous newly renovated vaction home! Owner is next door and available for services 24/7', address='1973 Old Dear Lane', city='Benicia', state='California', country='US', price=123, ownerId=6 )
    spot13 = Spot(name='Modern Cowboy Suite', description='Have you ever wanted to enjoy the cowboy life? Come stay enjoy our modern amenities with a country feel.', address='2576 Baker Avenue', city='Dallas', state='Texas', country='US', price=140, ownerId=1 )
    spot14= Spot(name='Donuts Lodge', description='Free donuts every weekday from the bakery next door!', address='4002 Hope Street', city='Portland', state='Oregon', country='US', price=252, ownerId=2 )
    spot15 = Spot(name='Country Home', description='Gorgeous newly renovated vaction home!', address='2605 Mcwhorter Road', city='West Point', state='Mississippi', country='US', price=12, ownerId=5 )
    spot16 = Spot(name='Artist Studio', description='Enhance your creative side with this secluded studio space.', address='3000 Clarence Court', city='Anaheim', state='California', country='US', price=122, ownerId=6 )
    spot17 = Spot(name='Bayside Apartment', description='Comfy not frills and near the beach!', address='3927 Lyon Avenue', city='Falmouth', state='Massachusetts', country='US', price=96, ownerId=4 )

    db.session.add_all([
                        spot1,
                        spot2,
                        spot3,
                        spot4,
                        spot5,
                        spot6,
                        spot7,
                        spot8,
                        spot9,
                        spot10,
                        spot11,
                        spot12,
                        spot13,
                        spot14,
                        spot15,
                        spot16,
                        spot17
                        ])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_spots():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.spots RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM spots")

    db.session.commit()
