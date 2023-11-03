describe 'GymMembers' do
  describe 'GET /index' do
    it 'responds with sucess' do
      get '/goodgymers.json'
      expect(response).to have_http_status(:success)
    end
  end
end
