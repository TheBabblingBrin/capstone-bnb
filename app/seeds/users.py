from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', first_name='Demo', last_name='User', email='demo@aa.io', password='password')
    marnie = User(
        username='MarnParties', first_name='Marnie', last_name='Party', email='marnie@aa.io', password='password')
    bobbie = User(
        username='BobbyB', first_name='Robert', last_name='Bobert',email='bobbie@aa.io', password='password')

    frank = User(
        username='franko', first_name='Frank', last_name='Oscar', email='frank@aa.io', password='password')
    kyle = User(
        username='KyleS', first_name='Kyle', last_name='Solano', email='kyle@aa.io', password='password')
    allen = User(
        username='AllenA', first_name='Allen', last_name='Pham',email='allen@aa.io', password='password')
    brin = User(
        username='BrinH', first_name='Brin', last_name='Hoover',email='brin@aa.io', password='password')
    ben = User(
        username='BenTie', first_name='Benjamin', last_name='Thai',email='ben@aa.io', password='password')
    sebas = User(
        username='SebAss', first_name='Sebastian', last_name='Ant',email='sebas@aa.io', password='password')
    will = User(
        username='WillieN', first_name='William', last_name='Ngo',email='will@aa.io', password='password')
    dion = User(
        username='BigDDion', first_name='Dion', last_name='Pham',email='dion@aa.io', password='password')
    db.session.add_all([dion,frank, kyle, allen, demo, marnie, bobbie, brin, ben, sebas, will])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
