export default function AccountSettingsForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <button type="submit">Save</button>
    </form>
  );
}
