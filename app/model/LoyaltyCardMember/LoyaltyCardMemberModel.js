Ext.define('BuskartApp.model.LoyaltyCardMember.LoyaltyCardMemberModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 'ID',
                 'CampaignCode',
                  'CampaignEnterpriseAccNo',
                 'CampaignRewardType',
                  'SubscriberAccNo',
                 'LoyaltyCardMemberRequestDate',
                  'LoyaltyCardMemberByMethod',
                 'LoyaltyCardMemberApprovalDate',
                  'LoyaltyCardMemberApprovalBy',
                 'ReferalSubscriberAccNo',
                  'LoyaltyCardMemberFee',
                 'IsRequiredFee',
                  'RowStatus',
                 'LoyaltyCardMemberNo',
                  'LoyaltyCardMemberApprovalStatus',
                  'StampCampaignCode',
                  'StampCampaignName',
                  'StartDate',
                   'EndDate',
                  'EnterpriseName',
                 'EnterpriseLogo',
                  'Stamps',
                 'LastStampedDate',
                  'NextRedeem',
                  'EnterpriseBusinessType',
                  'CurrentBatch',
                  'BackgroundImgOne',
                  'BackgroundImgTwo',
        'EnterpriseAccNo',
        'StampRuleRemarks',
        'IsStampRulePopUp'
                    , {
                        name: 'ModifiedNextRedeem',
                        convert: function (value, record) {

                            var _value;
                            var str = record.get('NextRedeem');
                            var Stamps = record.get('Stamps');
                            if (str) {
                                //_value = '<div style:margin:-10px 0px 0px 0px;>Next Redeem:' + str.substring(0, 8) + '....' + '<img style="margin:0px 0px 0px 0px;width:22px;height:22px;" src="resources/icons/StampSuccessCount.gif"/></div>';
                                _value = '<div class="blink_me"><b>Next Redeem:' + str.substring(0, 10) + '....</b></div>';
                            } else {
                                _value = Stamps;
                            }


                            return _value;
                        }
                    },
        ]
    }
});
