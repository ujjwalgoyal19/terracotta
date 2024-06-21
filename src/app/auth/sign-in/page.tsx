import Link from "next/link";

const SignInPage = () => {
  return (
    <div>
      <p>SignIn Page</p>
      <Link href={"/auth/sign-up"}>Go to Sign Up</Link>
    </div>
  );
};

export default SignInPage;
