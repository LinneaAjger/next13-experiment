export default function Form({ description, mode, buttonText, linkText, linkDescription }) {
  // <input type="text" value={username} onChange={handleUsernameInput}>
  // <input type="password" value={password} onChange={handlePasswordInput}>

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>{description}</h2>
        <form>
          <label>
            Username
            <input type="text"></input>
          </label>
          <label>
            Password
            <input type="password"></input>
          </label>
          <button type="submit">{buttonText}</button>
        </form>
      </div>
      <div>
        <p>{linkDescription} a member?</p>
        <a href={`/${mode}`}>{linkText} here</a>
      </div>
    </div>
  );
}
