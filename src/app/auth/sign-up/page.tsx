import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <p>SignUp Page</p>
      <Link href={"/auth/sign-in"}>Go to SignIn Page</Link>
    </div>
  );
};

export default SignUpPage;
