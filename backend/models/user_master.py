import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, Float, JSON
from sqlalchemy.sql import func
from database import Base

class UserMaster(Base):
    __tablename__ = "user_master"
    id = Column(Integer, primary_key=True)
    institution_name = Column(String(255), index=True, unique=True)
    name = Column(String(255))
    email = Column(String(255), unique=True)
    phone_number = Column(String(255))
    country = Column(String(255))
    city = Column(String(255))
    desiganation = Column(String(255))
    preference = Column(String(255))
    timing = Column(String(255))
    password_hash = Column(String(128))
    
    
    
    # institution = Column(String(128))
    # role_id = Column(Integer, ForeignKey("roles.id"))  # Add this line
    created_date = Column(DateTime, default=func.now(), nullable=False)
    updated_date = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)
    
    
    
    # id = Column(Integer, primary_key=True)
    # username = Column(String(64), index=True, unique=True)
    # password_hash = Column(String(128))
    # email = Column(String(120), index=True, unique=True)
    # institution = Column(String(128))
    # role_id = Column(Integer, ForeignKey("roles.id"))  # Add this line
    # created_date = Column(DateTime, default=func.now(), nullable=False)
    # updated_date = Column(DateTime, default=func.now(), onupdate=func.now(), nullable=False)