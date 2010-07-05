require 'sinatra'
require 'coderay'

class Furtacor < Sinatra::Base
  set :public, File.dirname(__FILE__) + '/public'

  before do
    content_type :html, :charset => 'utf-8'
  end

  get '/' do
    haml :index  
  end
  
  post '/coderay' do
    tokens = CodeRay.scan(params[:code], params[:lang])
    div = tokens.html :line_numbers => :inline, :wrap => :div
  end
end

