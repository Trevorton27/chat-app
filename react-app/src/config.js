
const tokenProvider = new Chatkit.TokenProvider({
	url: `https://us1.pusherplatform.io/services/chatkit_token_provider/v1/e23a8043-78e0-4aeb-8f11-afc59e6f2fde/token`
})


const chatManager = new ChatManager({
    instanceLocator: "v1:us1:e23a8043-78e0-4aeb-8f11-afc59e6f2fde",
    userId: 'Trevorton',
    tokenProvider
  })

  export { tokenProvider, chatManager };