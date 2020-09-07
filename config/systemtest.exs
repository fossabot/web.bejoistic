use Mix.Config
# We need to run a server during systemtest
config :wong_bejo, WongBejoWeb.Endpoint,
  http: [port: 5000],
  server: true

config :wong_bejo, WongBejo.Email, adapter: Bamboo.TestAdapter
config :wong_bejo, env: :systemtest
config :logger, level: :warn
