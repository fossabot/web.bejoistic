defmodule WongBejoWeb.Router do
  use WongBejoWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug PlugSecex,
      overrides: [
        "server": "Warp/3.3.10",
        "x-dns-prefetch-control": "on",
        "x-frame-options": "DENY",
        "x-hacker": "CTF feature coming soon"
      ]
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", WongBejoWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/aboutme", PageController, :aboutme
    get "/blog", PostController, :index
    resources "/post", PostController, only: [:show]
    resources "/tag", TagController, only: [:show]
    get "/contact", ContactController, :new
    post "/contact", ContactController, :create
  end

  if Application.get_env(:wong_bejo, :env) === :dev do
    forward("/sent_email", Bamboo.SentEmailViewerPlug)
  end
end
