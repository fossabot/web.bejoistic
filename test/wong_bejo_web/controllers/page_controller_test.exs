defmodule WongBejoWeb.EnControllerTest do
  use WongBejoWeb.ConnCase

  test "index", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "Welcome"
  end
end
