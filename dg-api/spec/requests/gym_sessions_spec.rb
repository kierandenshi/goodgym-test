describe 'GymSessions' do
  describe 'GET /index' do
    it 'responds with sucess' do
      get '/sessions.json'
      expect(response).to have_http_status(:success)
    end
  end
end
