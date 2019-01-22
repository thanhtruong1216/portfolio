class MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json: @messages
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render json: @message, status: :created
    else
      # render 'new'
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  private
    def message_params
      params.require(:message).permit(:name, :email, :phone, :content)
    end
end
