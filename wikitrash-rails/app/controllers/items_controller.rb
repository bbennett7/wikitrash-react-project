class ItemsController < ApplicationController
  def create
    @item = Item.new(item_params)
    @item.save
  end

  def db
    @items = Item.all
    render json: @items.to_json
  end

  private

  def item_params
    params.require(:item).permit(:name, :recyclable, :image, :rules, :locations, :references)
  end
end
