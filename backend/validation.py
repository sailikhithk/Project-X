REGISTER_SCHEMA = {
    "type": "object",
    "properties": {
        "institution_name": {"type": "string"},
        "name": {"type": "string"},
        "email": {"type": "string", "format": "email"},
        "phone_number": {"type": "string"},
        "country": {"type": "string"},
        "city": {"type": "string"},
        "desiganation": {"type": "string"},
        "preference": {"type": "string"},
        "timing": {"type": "string"},
        "password": {"type": "string"},        
    },
    "required": ["institution_name", "name", "email", "phone_number", "country", "city", "desiganation", "preference", "timing", "password"],
}

LOGIN_SCHEMA = {
    "type": "object",
    "properties": {
        "username": {"type": "string"},
        "password": {"type": "string"}
    },
    "required": ["username", "password"]
}

RESET_PASSWORD_SCHEMA = {
    "type": "object",
    "properties": {
        "user_id": {"type": "integer"},
        "password": {"type": "string"}
    },
    "required": ["user_id", "password"]
}