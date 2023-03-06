import Form from "../Form";
import styles from "../page.module.css";

export default async function Login() {
  return (
    <main className="first-main">
      <Form
        description="Welcome back!"
        buttonText="Sign in"
        linkDescription="Not"
        linkText="Register"
        mode="register"
      />
    </main>
  );
}
