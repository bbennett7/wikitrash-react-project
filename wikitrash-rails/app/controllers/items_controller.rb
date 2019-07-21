class ItemsController < ApplicationController
  def create
    item = Item.new(item_params)
    
    item.save
  end

  def update
    i = Item.all.find_index {|item| item.name.downcase == item_params[:name].downcase}

    item = Item.all[i]

    item.searches += 1 if item_params[:searches]
    item.upvotes += 1 if item_params[:upvotes]
    item.downvotes += 1 if item_params[:downvotes]
    item.verified = true if item.upvotes >= 10

    Item.all.delete(item) if item.downvotes >= 10

    item.save
  end

  def db
    @items = Item.all
    render json: @items.to_json
  end

  private

  def item_params
    params.require(:item).permit(:name, :recyclable, :image, :rules, :locations, :references, :upvotes, :downvotes)
  end
end
