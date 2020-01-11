class ChangeUsernameNullInUsersTable < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :username, :string, unique: true, null: true
  end
end
