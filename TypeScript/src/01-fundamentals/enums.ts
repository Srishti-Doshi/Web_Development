//Enums => enumerations => sort of key, value pairs but with = sign
//The main use of enum in TypeScript is to define a set of named constants.
//Enums help with: readability, fixed set of values, avoiding typos, better code structure

enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

let role = UserRoles.ADMIN




enum StatusCodes{
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404"
}

StatusCodes.ABANDONED



//Many developers today prefer union types instead of enums.

type UserRole = "admin" | "guest" | "supeer_admin";
let Srishti_role: UserRole = "supeer_admin";
