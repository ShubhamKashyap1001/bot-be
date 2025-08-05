router.post('/', createUser);
router.post('/Signup',userRegister)
router.post('/Signin',userLogin)

for userRegister = const {username , email ,password} = req.body
for userLogin = const { email, password } = req.body;