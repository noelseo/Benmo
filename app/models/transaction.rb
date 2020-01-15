# == Schema Information
#
# Table name: transactions
#
#  id          :bigint           not null, primary key
#  amount      :float            not null
#  sender_id   :integer          not null
#  receiver_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Transaction < ApplicationRecord
    validates :amount, :sender_id, :receiver_id, presence: true
    # validate :sufficient_funds

    belongs_to :sender,
        foreign_key: :sender_id,
        class_name: :User

    belongs_to :receiver,
        foreign_key: :receiver_id,
        class_name: :User

    # def add_funds(amount)
    #     @user = @current_user.id
    #     @user.balance += 100.00
    # end

    # def sufficient_funds?
    #     #sender
    #     #if balance is greater, sender.balance - amount
    #     # else throw an error / add from the bank
    # end



end
