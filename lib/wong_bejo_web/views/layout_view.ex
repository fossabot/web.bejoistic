defmodule WongBejoWeb.LayoutView do
  use WongBejoWeb, :view

  def production? do
    Application.get_env(:wong_bejo, :env) == :prod
  end
end
