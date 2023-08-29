import traceback
from flask_jwt_extended import create_access_token

from models.user_master import UserMaster as User
# from models.role import Role
from utils import encrypt, decrypt
from database import session


class UserService:
    def __init__(self):
        pass

    # def get_all_users(self):
    #     return self.user_repository.get_all_users()

    # def get_user_by_id(self, user_id):
    #     return session.query(User).filter_by(id=user_id).first()

    def get_user_by_username(self, name):
        return session.query(User).filter_by(name = name).first()
    
    def login_user(self, data):
        user_name = data["username"]
        password = data["password"]
        user = self.get_user_by_username(user_name)
        if not user:
            return {"message": "Invalid username or password", "status": False}

        hashpwd = user.password_hash
        db_password = decrypt(hashpwd)
        print("db_password", db_password)
        print("password", password)

        
        if db_password == password:
            user_data = {
                "name": user.name,
                "email": user.email,
                "phone_number": user.phone_number,
                "country": user.country,
                "city": user.city,
                "desiganation": user.desiganation,
                "preference": user.preference,
                "timing": user.timing,
                "user_id": user.id,
            }
            access_token = create_access_token(identity=user_data)
            return {"message": "", "status": True, "access_token": access_token, "data": user_data}
        else:
            return {"message": "Invalid username or password", "status": False}

    # def is_valid_admin(self, user_id):
    #     admin_role = session.query(Role).filter_by(name="Admin").first()
    #     admin_id = admin_role.id
    #     user = session.query(User).filter_by(id=user_id).filter_by(role_id=admin_id)
    #     if user:
    #         return True
    #     else:
    #         return False

    # def reset_password(self, data):
    #     password = data["password"]
    #     user_id = data["user_id"]

    #     hashed_password = encrypt(password)
    #     user = self.get_user_by_id(user_id)
    #     user.password_hash = hashed_password
    #     session.commit()
    #     return {"message": "Password updated, relogin again"}

    def register_user(self, data):
        try:
            # email check 
            print("Data", data)
            user = session.query(User).filter_by(email = data["email"]).first()
            print("User", user)
            if user:
               return {"message": f"User already exist", "status": False} 
                
            data["password_hash"] = encrypt(data["password"])
            data.pop("password")
            user = User(**data)
            session.add(user)
            session.commit()
        
            if user:
                return {"message": f"User created plese login from login page", "status": True}
            else:
                return {"message": f"User not created", "status": False}
        except Exception as e:
            traceback.print_exc()
            return {"message": "Something went wrong", "status": False}
        
