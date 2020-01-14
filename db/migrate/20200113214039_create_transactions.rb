class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.float :amount, null: false
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.timestamps
    end
  end
end
