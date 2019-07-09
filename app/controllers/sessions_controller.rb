class SessionsController < ApplicationController
  def new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]
      if user = User.find_by(email: auth_hash["info"]["email"])
        session[:user_id] = user.id
        redirect_to user_path(user)
      else
        user = User.new(email: auth_hash['info']['email'], password: SecureRandom.hex, name: auth_hash['info']['name'])
        if user.save
          session[:user_id] = user.id
          redirect_to user_path(user)
        else
          raise users.errors.full_messages.inspect
        end
      end
    else
      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        redirect_to user_path(user)
      else
        render :new
      end
    end
  end

  def destroy
    if current_user
      session.delete :user_id
      redirect_to root_url
    end
  end
end
