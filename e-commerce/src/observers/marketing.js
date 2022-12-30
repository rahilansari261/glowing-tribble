export default class Marketing {
  update({ id, userName }) {
    console.log(
      `[${id}]: [Marketing] will send an welcome email to [${userName}]`
    )
  }
}
