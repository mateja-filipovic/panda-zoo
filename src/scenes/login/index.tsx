import LoginForm from '@/components/login-form'

type Props = {}

const LoginPage = (props: Props) => {

  return (
    <div className="w-full h-screen bg-[url('@/assets/login_background.jpeg')] bg-cover bg-center">
      <div className="md:h-full md:w-1/4 flex flex-col md:px-16 bg-white justify-center items-center">
        <img src="/src/assets/logo.png" className="h-24 w-24"/>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage