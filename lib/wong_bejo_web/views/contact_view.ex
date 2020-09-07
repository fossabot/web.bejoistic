defmodule WongBejoWeb.ContactView do
  use WongBejoWeb, :view

  @spec production? :: boolean
  def production? do
    Application.get_env(:wong_bejo, :env) == :prod
  end
end
