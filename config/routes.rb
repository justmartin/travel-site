Rails.application.routes.draw do

  root "home#index"
  get "/countries" => "countries#index"
  get "/thailand" => "thailand#index"
  get "/budgets" => "budgets#index"

end
