use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :wong_bejo, WongBejoWeb.Endpoint,
  http: [port: 4002],
  server: false

config :wong_bejo, WongBejo.Email, adapter: Bamboo.TestAdapter

# Print only warnings and errors during test
config :logger, level: :warn

config :wong_bejo, :env, :test
