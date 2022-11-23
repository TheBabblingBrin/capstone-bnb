from app.models import db, User, Spot, SpotImage, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_images():
    spot1 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153273/AirBnB/New%20folder/JefsLoft/parc-lofts-miami-1_ybaote.jpg', spotId=1)
    spot2 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153277/AirBnB/New%20folder/JefsLoft/parc-lofts-miami-7_rjsvqb.jpg', spotId=1)
    spot3 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153274/AirBnB/New%20folder/JefsLoft/parc-lofts-miami-4_nun21x.jpg', spotId=1)
    spot5 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153276/AirBnB/New%20folder/LakesideHovel/0b6361f5-c14d-4d7f-85ca-15563fc69924_cip5i4.jpg', spotId=2)
    spot6 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153303/AirBnB/New%20folder/LakesideHovel/49feaeff-ec25-4c1d-ae97-1f07a5888300_j4i5mg.jpg', spotId=2)
    spot7 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153303/AirBnB/New%20folder/LakesideHovel/49feaeff-ec25-4c1d-ae97-1f07a5888300_j4i5mg.jpg', spotId=2)
    spot8 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153264/AirBnB/New%20folder/CuteGuestHouse/3536e8d4-3900-42d1-b1c4-ca29784d9ae4_vpjgdo.jpg', spotId=3)
    spot9 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153265/AirBnB/New%20folder/CuteGuestHouse/6ce9a76c-df83-45e8-b93c-000966241b3c_c4g1cx.jpg', spotId=3)
    spot10 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153264/AirBnB/New%20folder/CuteGuestHouse/188e763d-0f0b-4236-bc94-f6577fbbbf71_ma6x5g.jpg', spotId=3)
    spot12 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153247/AirBnB/New%20folder/CollegePara/2304b371-3409-4ea7-ae2d-83b118f023df_fpugbq.jpg', spotId=4)
    spot13 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153265/AirBnB/New%20folder/CollegePara/f2333b76-642d-4fe4-8706-3e7f8f04c72b_defeap.jpg', spotId=4)
    spot14= SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153248/AirBnB/New%20folder/CollegePara/b3668957-0b47-4f35-b924-d1dba25ff1ec_yalnbl.jpg', spotId=4)
    spot15 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153271/AirBnB/New%20folder/HuntingShack/46cc496d-60ef-445d-afbe-a8b532e9ed89_fldgx1.jpg', spotId=5)
    spot16 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153274/AirBnB/New%20folder/HuntingShack/06518153-205b-4b12-9930-8b6ff96561da_lpqzff.jpg', spotId=5)
    spot17 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153277/AirBnB/New%20folder/HuntingShack/f9b27cd4-42f7-4f75-8767-4be1c6abff25_ac1vux.jpg', spotId=5)
    spot19 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153280/AirBnB/New%20folder/MountainGetaway/2628c333-ebc7-40fb-9dd9-d48f0eafe64c_j33dct.jpg', spotId=6)
    spot20 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153280/AirBnB/New%20folder/MountainGetaway/25998b82-970e-4267-801f-bdbe0a5f1336_g8qlse.jpg', spotId=6)
    spot21= SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153293/AirBnB/New%20folder/MountainGetaway/f67475b3-257e-426c-9473-b9b95dd77b4f_pwbwgk.jpg', spotId=6)
    spot22 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153244/AirBnB/New%20folder/BensRanch/69d2ff67-4b28-4d53-aba8-b628542cee40_n4kvch.jpg', spotId=7)
    spot23 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153289/AirBnB/New%20folder/BensRanch/e02e1ba2-a2a3-418c-b3e2-c703d5e5ea90_oedoei.jpg', spotId=7)
    spot45 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153243/AirBnB/New%20folder/BensRanch/089e404a-63dc-466f-8b39-83bec34a3366_iypxcm.jpg', spotId=7)
    spot24 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153262/AirBnB/New%20folder/DowntownBungaloo/ec5cc49a-716f-495e-98aa-cc17dac0a97f_g1lxbc.jpg', spotId=8)
    spot25 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153269/AirBnB/New%20folder/DowntownBungaloo/e29cf035-782f-4be4-be6b-db594da6790e_tzqdbj.jpg', spotId=8)
    spot26 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153309/AirBnB/New%20folder/DowntownBungaloo/12af2fe0-ceaa-405e-b906-19c97a0e3848_e37sck.jpg', spotId=8)
    spot27 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153279/AirBnB/New%20folder/JensBeachhouse/c29b3690-61eb-4e08-8975-2b87c0d170d2_s8ymij.jpg', spotId=9)
    spot28 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153278/AirBnB/New%20folder/JensBeachhouse/d8753e67-2273-4d40-8501-d1994efc9796_ofeobs.jpg', spotId=9)
    spot29 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153279/AirBnB/New%20folder/JensBeachhouse/25407672-dc31-4c3d-a12d-b419cf13d53a_ladovi.jpg', spotId=9)
    spot30 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153274/AirBnB/New%20folder/JefsLoft/parc-lofts-miami-4_nun21x.jpg', spotId=10)
    spot31 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153273/AirBnB/New%20folder/JefsLoft/parc-lofts-miami-1_ybaote.jpg', spotId=10)
    spot32 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153304/AirBnB/New%20folder/BrookBedroom/58b0f213-5822-40b5-8f57-f77f7d9a2db4_ggqxxd.jpg', spotId=11)
    spot33 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153300/AirBnB/New%20folder/BrookBedroom/8d061d75-ec76-4162-912e-c6258f71c7b4_ilduxb.jpg', spotId=11)
    spot34 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153290/AirBnB/New%20folder/BrookBedroom/2da88533-733b-408a-a3a9-f8f902ce75d3_gekpy9.jpg', spotId=11)
    spot35 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153262/AirBnB/New%20folder/MarkerHouse/c90c2b6a-e836-4eaa-85ab-cc0951ac89c5_gwtzqx.jpg', spotId=12)
    spot36 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153262/AirBnB/New%20folder/MarkerHouse/f33c1d90-ab12-4d8d-9526-79dded4bfb5b_cx93fd.jpg', spotId=12)
    spot37 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153305/AirBnB/New%20folder/MarkerHouse/e34bf2e1-7af6-40fe-8346-70e93d89b5fd_rilcri.jpg', spotId=12)
    spot38 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153311/AirBnB/New%20folder/ModerCowboy/0cf08edc-4751-4df6-be8b-8ba30c39452a_q8vjen.jpg', spotId=13)
    spot39 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153310/AirBnB/New%20folder/ModerCowboy/adaeeedc-979d-4d58-beb6-4ca9c56dc431_qp0sqp.jpg', spotId=13)
    spot40 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153279/AirBnB/New%20folder/ModerCowboy/a6b7b872-7dd3-48c6-b4c9-5918acfbeaf3_axt9lf.jpg', spotId=13)
    spot41 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153291/AirBnB/New%20folder/DonutsLodge/c850f332-0e4d-4f33-a2b4-8b55f9612658_jrnabu.jpg', spotId=14)
    spot42 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153314/AirBnB/New%20folder/DonutsLodge/9c270e59-4134-4a7f-a1ef-6c003962672a_ok0soh.jpg', spotId=14)
    spot44 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153270/AirBnB/New%20folder/CountryHome/7d509204-75db-4130-bd46-9ca14fa36a8a_dcauss.jpg', spotId=15)
    spot45 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153301/AirBnB/New%20folder/CountryHome/138c0422-150e-40df-b63f-407b0f233097_wbqebv.jpg', spotId=15)
    spot46 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153307/AirBnB/New%20folder/CountryHome/d7ffc060-186e-4a0f-aa1f-8bd1be8225d2_viva4p.jpg', spotId=15)
    spot47 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153243/AirBnB/New%20folder/ArtistStudio/Screen-Shot-2015-07-30-at-4.08.37-AM_jwql7p.png', spotId=16)
    spot50 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153242/AirBnB/New%20folder/Bayside%20apartment/f7712e19-d007-49d9-98f8-862fd4dfea48_z2caza.jpg', spotId=17)
    spot51 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153241/AirBnB/New%20folder/Bayside%20apartment/3e5876cb-3851-4b1c-b128-89012c87e8b6_shprbo.jpg', spotId=17)
    spot52 = SpotImage(url='https://res.cloudinary.com/degkakjou/image/upload/v1669153246/AirBnB/New%20folder/Bayside%20apartment/11906d7b-588b-480e-aace-39c1668a1565_rhadrp.jpg', spotId=17)
    db.session.add_all([
                        spot1,
                        spot2,
                        spot3,
                        spot5,
                        spot6,
                        spot7,
                        spot8,
                        spot9,
                        spot10,
                        spot12,
                        spot13,
                        spot14,
                        spot15,
                        spot16,
                        spot17,
                        spot19,
                        spot20,
                        spot21,
                        spot22,
                        spot23,
                        spot45,
                        spot24,
                        spot25,
                        spot26,
                        spot27,
                        spot28,
                        spot29,
                        spot30,
                        spot31,
                        spot32,
                        spot33,
                        spot34,
                        spot35,
                        spot36,
                        spot37,
                        spot38,
                        spot39,
                        spot40,
                        spot41,
                        spot42,
                        spot44,
                        spot45,
                        spot46,
                        spot47,
                        spot50,
                        spot51,
                        spot52,
                                            ])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.spotimages RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM spotimages")

    db.session.commit()
