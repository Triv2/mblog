import AuthForm from "@/components/authform";


interface AuthLandingPageProps {}

const AuthLandingPage = () => {
  return (
  <div className="flex flex-col items-center justify-center min-h-full py-12 sm:px-6 lg:px-8 gap-5 bg-zinc-100">
    <div>
      <h2 className="font-bold text-3xl">Login or Sign-up</h2>
    </div>
    <AuthForm/>
  </div>
  );
}
export default AuthLandingPage;