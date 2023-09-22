const db = require("../entities");
const UA_table = db.UserAdminRegTable;

const create_user_admin = async (req, res) => {
  console.log(req.body.name);
  const { name, empid ,email, password, designation, mobile, blood_group, address} = req.body;

  if (name && empid && password && email && designation && mobile && blood_group, address) {
    const email_pattern=/^[\w.-]+@jmangroup\.com$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9@#$%^&*!]{8,}$/
    const empid_pattern = /^JMD\w{3}$/

    try {
      // Check if a user with the same email already exists in the database
      const existingUser = await UA_table.findOne({ where: { Email: email }});
        console.log(existingUser,"BAckend signup")
      if (existingUser) {
        res.status(200).json({ message: "User already exists!" });
      } else if(!email_pattern.test(email)){
        res.status(200).json({ message: "In email domain name should contain jmangroup and only small letters"});
      } else if(!password_pattern.test(password)){
        res.status(200).json({ message: "Password must have a capital letter a small letter and a number and include any special character"});  
      } else if(!empid_pattern.test(empid)) {
        res.status(200).json({ message:"Invalid Employee Id" });
      } else {
        // Create a new user in the database
        const newUser = await UA_table.create({
          FullName: name,
          EmployeeId:empid,
          Email: email,
          Password: password,
          Designation: designation,
          Mobile: mobile,
          BloodGroup:blood_group,
          Address:address,
        });
        console.log(newUser);
        res.status(200).json({ message: "User added" });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(200).json({ message: "All fields are mandatory ; Please fill it."});
  }
};

module.exports = {
  create_user_admin,
};

