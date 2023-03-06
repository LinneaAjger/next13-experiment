import Form from "../Form";
import styles from "../page.module.css";

export default async function Login() {
  return (
    <main className="first-main">
      <Form
        description="Create a free account"
        buttonText="Register"
        linkDescription="Already"
        linkText="Login"
        mode="login"
      />
    </main>
  );
}
