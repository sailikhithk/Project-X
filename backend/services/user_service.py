import traceback
from flask_jwt_extended import create_access_token

from models.user_model import User
from models.role_model import Role
from utils import encrypt, decrypt
from database import session


class UserService:
    def __init__(self):
        pass

    def get_all_users(self):
        return self.user_repository.get_all_users()

    def get_user_by_id(self, user_id):
        return session.query(User).filter_by(id=user_id).first()

    def get_user_by_username(self, username):
        return session.query(User).filter_by(username = username).first()

    def create_user(self, username, password, email, institution, role_id):
        hashed_password = encrypt(password)
        new_user = User(
            username=username,
            password_hash=hashed_password,
            email=email,
            institution=institution,
            role_id=role_id,
        )
        session.add(new_user)
        session.commit()
        return new_user

    def login_user(self, data):
        user_name = data["username"]
        password = data["password"]
        user = self.get_user_by_username(user_name)
        if not user:
            return {"error": "Invalid username or password"}

        hashpwd = user.password_hash
        db_password = decrypt(hashpwd)

        if db_password == password:
            user_data = {
                "user_name": user.username,
                "email": user.email,
                "institution": user.institution,
                "role_id": user.role_id,
                "user_id": user.id,
            }
            # access_token = create_access_token(identity=user_data)
            return user_data
        else:
            print("db_password", db_password)
            print("password", password)
            return {"error": "Invalid username or password"}

    def is_valid_admin(self, user_id):
        admin_role = session.query(Role).filter_by(name="Admin").first()
        admin_id = admin_role.id
        user = session.query(User).filter_by(id=user_id).filter_by(role_id=admin_id)
        if user:
            return True
        else:
            return False

    def reset_password(self, data):
        password = data["password"]
        user_id = data["user_id"]

        hashed_password = encrypt(password)
        user = self.get_user_by_id(user_id)
        user.password_hash = hashed_password
        session.commit()
        return {"message": "Password updated, relogin again"}

    def register_user(self, data):
        try:
            username = data["username"]
            password = data["password"]
            email = data["email"]
            institution = data["institution"]
            role_name = data["role"]

            role = session.query(Role).filter_by(name=role_name).first()
            if role is None:
                return {"error": f"Role '{role_name}' not found."}

            role_id = role.id
            user = self.create_user(username, password, email, institution, role_id)
            if user:
                return {"message": f"User created plese login from login page"}
            else:
                return {"message": f"User not created"}
        except Exception as e:
            traceback.print_exc()
