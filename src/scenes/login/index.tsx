import LoginForm from '@/components/login-form'

type Props = {}

const LoginPage = (props: Props) => {

  
  return (
    <div className="w-full h-screen bg-[url('@/assets/login_background.jpeg')] bg-cover bg-center px-2 md:px-0 
      flex flex-col justify-center md:flex-none">
      <div className="md:h-full md:w-1/4 flex flex-col md:px-6 lg:px-16 bg-white justify-center items-center py-10 rounded-lg md:py-0 md:rounded-none">
        <img src="/src/assets/logo.png" className="h-24 w-24"/>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage