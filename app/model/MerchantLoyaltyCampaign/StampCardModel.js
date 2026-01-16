// Ext.define('BuskartApp.model.MerchantLoyaltyCampaign.StampCardModel', {
//     extend: 'Ext.data.Model',
//     config: {
//         fields: [
//             'ID',
//                  'StampCardCode',
//                   'StampCampaignCode',
//                   'StampContent',
//                   'StampContentSequence',
//                   'StampContentNote',
//                   'StampCardType',
//                   'EnterpriseAccNo',
//                   'CreatedByAccNo',
//                   'CreatedBy',
//                   'CreatedDate',
//                   'ModifiedBy',
//                   'ModifiedDate',
//                   'RowStatus',
//                   'TextOne',
//                   'TextTwo',
//                   'DivContent',
//                   'DivContentTextTwo',
//                   'StampContentDefaultTemplateID',
//                   'ShowHide',
//                   'ImgContentName',
//                   'isRedeemItem',
//                   'StampedStatus',
//                   'SubscriberAccNo',
//                   'StampedBy',
//                   'StampedDate',
//                   'StampedTime',
//                   'EnterpriseLogo',
//                   'EnterpriseName',
//                   'CountRow',
//                   'EndDate',
//                   'StampRuleRemarks',
//                   'IsStampRulePopUp',
//                   'StartDate',
//                   'StampCampaignName',
//                   'NextRedeemItemStampContent',
//                   'NextRedeemItemStampContentNote',
//                   'CountStampCardRowShow',
//                   'CountStampCardRowYES',
//                   'CountStampYES',
//                   'EnterprisesLogo',
//                   'EnterpriseTagLine',
//                   'isRequiredStartEndDate',
//                   'isCampaignExpired',
//                   'CampaignDayLeft',
//                   'AdvertisementTitle',
//                   'MembershipCardCode',
//                   'CountStar',
//                   'CountReviewer',
//                   'SearchCol',
//                   'MembershipCardFeePaymentCycle',
//                   'BusinessMode',    
//                   'EnterpriseDescription',
//                   'isMember',
//                   'StampedRedeemStatus',
//                   {
//                     name: 'ModifiedStampContent',
//                     convert: function (value, record) {
         
//                         var _value1;
//                         var _value2;
//                         var _value3;
//                         var _value4;
//                         var _value5;
//                         var _value6;
//                         var _value;                    
//                         var ImagePath = record.get('StampContent');                       
//                             _value1= ImagePath.replace("width:70px", "width:100%");
//                            // _value2=_value1.replace("height:70px", "height:250px");
//                             _value2=_value1.replace("height:70px", "height:100%;object-fit:cover;");
//                             _value3 = _value2.replace("font-size: 35px;", "font-size: 60px;");
//                             _value4 = _value3.replace("margin:7px 0px 0px 0px", "margin:70px 0px 0px 0px")
//                             _value5 = _value4.replace("margin:-90px 0px 0px 0px", "margin:-150px 0px 0px 0px")
//                             _value6 = _value5.replace('size="3"', 'size="6"')
//                             _value = _value6.replace("border-radius: 50px", "border-radius: 0px")
                            

                         
//                         return _value;
//                     }
//                 },
//                 {
//                     name: 'ModifiedStampContent_CheckInSuccess',
//                     convert: function (value, record) {
         
//                         var _value1;
//                         var _value2;
//                         var _value3;
//                         var _value4;
//                         var _value5;
//                         var _value6;
//                         var _value;                    
//                         var ImagePath = record.get('StampContent');                       
//                             _value1= ImagePath.replace("width:70px", "width:100%");
//                            // _value2=_value1.replace("height:70px", "height:250px");
//                             _value2=_value1.replace("height:70px", "height:100%;object-fit:cover;");
//                             _value3 = _value2.replace("font-size: 35px;", "font-size: 50px;");
//                             _value4 = _value3.replace("margin:7px 0px 0px 0px", "margin:0px 0px 0px 0px")
//                             _value5 = _value4.replace("margin:-90px 0px 0px 0px", "margin:-125px 0px 0px 0px")
//                             _value6 = _value5.replace('size="3"', 'size="5"')
//                             _value = _value6.replace("border-radius: 50px", "border-radius: 0px")
                            

                         
//                         return _value;
//                     }
//                 },
//                      {
//                          name: 'ModifiedCampaignType',
//                          convert: function (value, record) {
//                              var _value;
//                              var IsStampRulePopUp = record.get('IsStampRulePopUp');
//                              if (IsStampRulePopUp == "POINTLOYALTYCARD") {
//                                  _value = 'Point Loyalty Campaign';
//                                  return _value
//                              } if (IsStampRulePopUp == "YES" || IsStampRulePopUp == "NO") {
//                                  _value = 'Stamp Loyalty Campaign';
//                                  return _value
//                              }
//                              else {
//                                  _value = 'Unknown Loyalty Campaign';
//                                  return _value
//                              }



                           
//                          }
//                      },


//                      {
//                         name: 'ModifiedStampedRedeemStatusBackground',
//                         convert: function (value, record) {
//                             var _value;
//                             var StampedRedeemStatus = record.get('StampedRedeemStatus');
//                             if (StampedRedeemStatus == "Approved") {
//                                 _value = 'background-color: #6C757D;color: #FFFFFF;';
//                                 return _value
//                             } else if (StampedRedeemStatus == "Submitted") {
//                                 _value = 'background-color: #FD7E14;color: #FFFFFF;';
//                                 return _value
//                             } 
//                             else {
//                                 _value = 'background: linear-gradient(135deg,#ff00de,#c800ff);color:#fff;';
//                                 return _value
//                             }



                          
//                         }
//                     },
//                     {
//                         name: 'ModifiedStampContentSequence',
//                         convert: function (value, record) {
//                             var _value;
//                             var StampedRedeemStatus = record.get('StampedRedeemStatus');
//                             var StampContentSequence = record.get('StampContentSequence');
                            
//                             if (StampedRedeemStatus == "Approved") {
//                                 _value = 'Claimed';
//                                 return _value
//                             } else if (StampedRedeemStatus == "Submitted") {
//                                 _value = 'Pending';
//                                 return _value
//                             } 
//                             else {
//                                 _value =StampContentSequence+'/'+ '11';
//                                 return _value
//                             }



                          
//                         }
//                     },
//                     {
//                         name: 'ModifiedStampContentSequenceWidth',
//                         convert: function (value, record) {
//                             var _value;
//                             var StampedRedeemStatus = record.get('StampedRedeemStatus');
                            
//                             if (StampedRedeemStatus == "Approved") {
//                                 _value ='56px';
//                                 return _value
//                             } else if (StampedRedeemStatus == "Submitted") {
//                                 _value ='56px';
//                                 return _value
//                             } 
//                             else {
//                                 _value ='46px';
//                                 return _value
//                             }



                          
//                         }
//                     },
//         ]
//     }
// });






Ext.define('BuskartApp.model.MerchantLoyaltyCampaign.StampCardModel', {
    extend: 'Ext.data.Model',    
        fields: [
            'ID',
                 'StampCardCode',
                  'StampCampaignCode',
                  'StampContent',
                  'StampContentSequence',
                  'StampContentNote',
                  'StampCardType',
                  'EnterpriseAccNo',
                  'CreatedByAccNo',
                  'CreatedBy',
                  'CreatedDate',
                  'ModifiedBy',
                  'ModifiedDate',
                  'RowStatus',
                  'TextOne',
                  'TextTwo',
                  'DivContent',
                  'DivContentTextTwo',
                  'StampContentDefaultTemplateID',
                  'ShowHide',
                  'ImgContentName',
                  'isRedeemItem',
                  'StampedStatus',
                  'SubscriberAccNo',
                  'StampedBy',
                  'StampedDate',
                  'StampedTime',
                  'EnterpriseLogo',
                  'EnterpriseName',
                  'CountRow',
                  'EndDate',
                  'StampRuleRemarks',
                  'IsStampRulePopUp',
                  'StartDate',
                  'StampCampaignName',
                  'NextRedeemItemStampContent',
                  'NextRedeemItemStampContentNote',
                  'CountStampCardRowShow',
                  'CountStampCardRowYES',
                  'CountStampYES',
                  'EnterprisesLogo',
                  'EnterpriseTagLine',
                  'isRequiredStartEndDate',
                  'isCampaignExpired',
                  'CampaignDayLeft',
                  'AdvertisementTitle',
                  'MembershipCardCode',
                  'CountStar',
                  'CountReviewer',
                  'SearchCol',
                  'MembershipCardFeePaymentCycle',
                  'BusinessMode',    
                  'EnterpriseDescription',
                  'isMember',
                  'StampedRedeemStatus',
                  {
                    name: 'ModifiedStampContent',
                    convert: function (value, record) {
         
                        var _value1;
                        var _value2;
                        var _value3;
                        var _value4;
                        var _value5;
                        var _value6;
                        var _value;                    
                        var ImagePath = record.get('StampContent');                       
                            _value1= ImagePath.replace("width:70px", "width:100%");
                           // _value2=_value1.replace("height:70px", "height:250px");
                            _value2=_value1.replace("height:70px", "height:100%;object-fit:cover;");
                            _value3 = _value2.replace("font-size: 35px;", "font-size: 60px;");
                            _value4 = _value3.replace("margin:7px 0px 0px 0px", "margin:70px 0px 0px 0px")
                            _value5 = _value4.replace("margin:-90px 0px 0px 0px", "margin:-150px 0px 0px 0px")
                            _value6 = _value5.replace('size="3"', 'size="6"')
                            _value = _value6.replace("border-radius: 50px", "border-radius: 0px")
                            

                         
                        return _value;
                    }
                },
                {
                    name: 'ModifiedStampContent_CheckInSuccess',
                    convert: function (value, record) {
         
                        var _value1;
                        var _value2;
                        var _value3;
                        var _value4;
                        var _value5;
                        var _value6;
                        var _value;                    
                        var ImagePath = record.get('StampContent');                       
                            _value1= ImagePath.replace("width:70px", "width:100%");
                           // _value2=_value1.replace("height:70px", "height:250px");
                            _value2=_value1.replace("height:70px", "height:100%;object-fit:cover;");
                            _value3 = _value2.replace("font-size: 35px;", "font-size: 50px;");
                            _value4 = _value3.replace("margin:7px 0px 0px 0px", "margin:30px 0px 0px 0px")
                            _value5 = _value4.replace("margin:-90px 0px 0px 0px", "margin:-20px 0px 0px 0px")
                            _value6 = _value5.replace('size="3"', 'size="5"')
                            _value = _value6.replace("border-radius: 50px", "border-radius: 0px")
                            

                         
                        return _value;
                    }
                },
                     {
                         name: 'ModifiedCampaignType',
                         convert: function (value, record) {
                             var _value;
                             var IsStampRulePopUp = record.get('IsStampRulePopUp');
                             if (IsStampRulePopUp == "POINTLOYALTYCARD") {
                                 _value = 'Point Loyalty Campaign';
                                 return _value
                             } if (IsStampRulePopUp == "YES" || IsStampRulePopUp == "NO") {
                                 _value = 'Stamp Loyalty Campaign';
                                 return _value
                             }
                             else {
                                 _value = 'Unknown Loyalty Campaign';
                                 return _value
                             }



                           
                         }
                     },


                     {
                        name: 'ModifiedStampedRedeemStatusBackground',
                        convert: function (value, record) {
                            var _value;
                            var StampedRedeemStatus = record.get('StampedRedeemStatus');
                            if (StampedRedeemStatus == "Approved") {
                                _value = 'background-color: #6C757D;color: #FFFFFF;';
                                return _value
                            } else if (StampedRedeemStatus == "Submitted") {
                                _value = 'background-color: #FD7E14;color: #FFFFFF;';
                                return _value
                            } 
                            else {
                                _value = 'background: linear-gradient(135deg,#ff00de,#c800ff);color:#fff;';
                                return _value
                            }



                          
                        }
                    },
                    {
                        name: 'ModifiedStampContentSequence',
                        convert: function (value, record) {
                            var _value;
                            var StampedRedeemStatus = record.get('StampedRedeemStatus');
                            var StampContentSequence = record.get('StampContentSequence');
                            
                            if (StampedRedeemStatus == "Approved") {
                                _value = 'Claimed';
                                return _value
                            } else if (StampedRedeemStatus == "Submitted") {
                                _value = 'Pending';
                                return _value
                            } 
                            else {
                                _value =StampContentSequence+'/'+ '11';
                                return _value
                            }



                          
                        }
                    },
                    {
                        name: 'ModifiedStampContentSequenceWidth',
                        convert: function (value, record) {
                            var _value;
                            var StampedRedeemStatus = record.get('StampedRedeemStatus');
                            
                            if (StampedRedeemStatus == "Approved") {
                                _value ='56px';
                                return _value
                            } else if (StampedRedeemStatus == "Submitted") {
                                _value ='56px';
                                return _value
                            } 
                            else {
                                _value ='46px';
                                return _value
                            }



                          
                        }
                    },
        ]
   
});

