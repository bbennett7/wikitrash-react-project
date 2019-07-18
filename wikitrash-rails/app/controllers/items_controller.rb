class ItemsController < ApplicationController
  def create
    @item = Item.new(item_params)
    @item.save
  end
end

private

def item_params
  params.require(:item).permit(:name, :recyclable, :image, :rules, :locations, :references)
end
