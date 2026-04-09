Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_ViewMyRanking', {
});

var _FloatPanel_AyohaReward_ViewMyRanking = null;
var isFloatPanel_AyohaReward_ViewMyRankingOpen = 'N';

var myRankingNo = 0;
var myRankingContestantName = '';
var myRankingContestantImge = '';
var myRankingContestantPoint = 0;

function FloatPanel_AyohaReward_ViewMyRankingDefaultAvatar() {
    return 'resources/icons/rankingwho01.png';
}

function FloatPanel_AyohaReward_ViewMyRankingSafeText(value) {
    return Ext.String.htmlEncode(value || '');
}

function FloatPanel_AyohaReward_ViewMyRankingNumber(value) {
    var numericValue = parseFloat(value || 0);

    if (isNaN(numericValue)) {
        numericValue = 0;
    }

    return numericValue;
}

function FloatPanel_AyohaReward_ViewMyRankingFormatPoints(value) {
    return Ext.util.Format.number(FloatPanel_AyohaReward_ViewMyRankingNumber(value), '0,000');
}

function FloatPanel_AyohaReward_ViewMyRankingAnimateValue(cmpId, value, cssClass, suffix, duration) {
    var cmp = Ext.getCmp(cmpId);
    var finalValue = Math.max(0, Math.round(FloatPanel_AyohaReward_ViewMyRankingNumber(value)));
    var animationDuration = duration || 800;
    var frameCount = 24;
    var frameDuration = Math.max(20, Math.floor(animationDuration / frameCount));
    var currentFrame = 0;

    if (!cmp) {
        return;
    }

    if (cmp._countTimer) {
        clearInterval(cmp._countTimer);
    }

    function updateHtml(displayValue) {
        cmp.setHtml('<div class="' + cssClass + '">' + FloatPanel_AyohaReward_ViewMyRankingFormatPoints(displayValue) + (suffix || '') + '</div>');
    }

    updateHtml(0);

    cmp._countTimer = setInterval(function () {
        currentFrame++;

        if (!cmp || cmp.destroyed) {
            clearInterval(cmp._countTimer);
            cmp._countTimer = null;
            return;
        }

        if (currentFrame >= frameCount) {
            updateHtml(finalValue);
            clearInterval(cmp._countTimer);
            cmp._countTimer = null;
            return;
        }

        updateHtml(Math.round((finalValue * currentFrame) / frameCount));
    }, frameDuration);
}

function FloatPanel_AyohaReward_ViewMyRankingBuildCircleImage(photo, size, highlighted) {
    var imageSource = photo || FloatPanel_AyohaReward_ViewMyRankingDefaultAvatar();
    var borderStyle = highlighted ? '3px solid rgba(255,255,255,0.72)' : '2px solid rgba(255,255,255,0.40)';

    return '<img src="' + imageSource + '" style="width:' + size + 'px;height:' + size + 'px;border-radius:50%;object-fit:cover;border:' + borderStyle + ';display:block;">';
}

function FloatPanel_AyohaReward_ViewMyRankingBuildCurrentUserImage(photo) {
    var imageSource = photo || FloatPanel_AyohaReward_ViewMyRankingDefaultAvatar();

    return '<div class="lb-current-avatar-wrap">' +
        '<img src="' + imageSource + '" class="lb-current-avatar-img">' +
        '</div>';
}

function FloatPanel_AyohaReward_ViewMyRankingBuildPodiumCard(suffix, cls, medalIcon, avatarSize) {
    var crownHtml = '';
    var ribbonHtml = '';

    if (suffix === '01') {
        crownHtml = '<div class="lb-podium-crown">&#128081;</div>';
        ribbonHtml = '<div class="lb-podium-ribbon">Champion</div>';
    }

    return {
        xtype: 'container',
        id: 'containerFloatPanel_AyohaReward_ViewMyRankingPodium' + suffix,
        flex: 1,
        cls: cls,
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },
        items: [
            {
                hidden: suffix !== '01',
                id: 'htmlFloatPanel_AyohaReward_ViewMyRanking' + suffix + '_Crown',
                html: crownHtml
            },
            {
                hidden: suffix !== '01',
                id: 'htmlFloatPanel_AyohaReward_ViewMyRanking' + suffix + '_Ribbon',
                html: ribbonHtml
            },
            {
                id: 'htmlFloatPanel_AyohaReward_ViewMyRanking' + suffix + '_Medal',
                html: '<div class="lb-podium-medal-wrap"><img src="' + medalIcon + '" class="lb-podium-medal ' + (suffix === '01' ? 'lb-podium-medal-center' : '') + '"></div>'
            },
            {
                id: 'htmlFloatPanel_AyohaReward_ViewMyRanking' + suffix + '_Image',
                margin: '8 0 0 0',
                html: FloatPanel_AyohaReward_ViewMyRankingBuildCircleImage('', avatarSize, false)
            },
            {
                id: 'htmlFloatPanel_AyohaReward_ViewMyRanking' + suffix + '_Name',
                margin: '8 0 0 0',
                html: '<div class="lb-podium-name">Vacant</div>'
            },
            {
                id: 'htmlFloatPanel_AyohaReward_ViewMyRanking' + suffix + '_Txt',
                margin: '4 0 0 0',
                html: '<div class="lb-podium-points">0</div>'
            }
        ]
    };
}

function FloatPanel_AyohaReward_ViewMyRankingBuildNearRow(slot) {
    return {
        xtype: 'container',
        id: 'containerFloatPanel_AyohaReward_ViewMyRankingNearRow' + slot,
        hidden: true,
        width: '100%',
        margin: '0 0 12 0',
        cls: 'lb-near-row',
        layout: {
            type: 'hbox',
            pack: 'start',
            align: 'center'
        },
        items: [
            {
                id: 'htmlFloatPanel_AyohaReward_ViewMyRankingNearRow' + slot + '_Rank',
                html: '<div class="lb-near-rank">#0</div>'
            },
            {
                id: 'htmlFloatPanel_AyohaReward_ViewMyRankingNearRow' + slot + '_Name',
                flex: 1,
                margin: '0 0 0 16',
                html: '<div class="lb-near-name">Vacant</div>'
            },
            {
                id: 'htmlFloatPanel_AyohaReward_ViewMyRankingNearRow' + slot + '_Points',
                html: '<div class="lb-near-points">0</div>'
            }
        ]
    };
}

function FloatPanel_AyohaReward_ViewMyRankingCreateIfNeeded() {
    if (_FloatPanel_AyohaReward_ViewMyRanking && !_FloatPanel_AyohaReward_ViewMyRanking.destroyed) {
        return;
    }

    _FloatPanel_AyohaReward_ViewMyRanking = Ext.create('Ext.Panel', {
        id: 'FloatPanel_AyohaReward_ViewMyRankingID',
        floated: true,
        centered: true,
        fullscreen: true,
        closeAction: 'destroy',
        draggable: false,
        modal: false,
        styleHtmlContent: true,
        layout: 'fit',
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        style: 'background:linear-gradient(180deg,#4a127c 0%,#61209d 45%,#7a25c0 100%);',
        listeners: {
            beforehide: function () {
                return true;
            }
        },
        items: [
            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                cls: 'lb-screen',
                layout: 'fit',
                items: [
                    {
                        xtype: 'container',
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true,
                            indicators: false
                        },
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingHeader',
                                padding: '15 10 12 10',
                                layout: {
                                    type: 'hbox',
                                    pack: 'start',
                                    align: 'center'
                                },
                                items: [



                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaMerchantInfo_EventCardLoyaltyProgramBack',
                                         height: 30,
                                         width: 65,
                                         margin: '0 0 0 0',
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                         FloatPanel_AyohaReward_ViewMyRankingHide(false);

                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },
                                      {
                                        html:ayohaTheme_HeaderText('Top 10 Leaderboard'),
                                        margin: '0 15 0 0', 
                                       // html: '<div style="color:black;text-align: right;font-size:14px;width:100%;"><b>Membership Event</b></div>'
                                    },
                                      









                                    // {
                                    //     xtype: 'button',
                                    //     id: 'btnFloatPanel_AyohaReward_ViewMyRankingBack',
                                    //     width: 66,
                                    //     height: 46,
                                    //     ui: 'plain',
                                    //     cls: 'lb-back-button',
                                    //     html: '<div class="lb-back-button-inner"><img src="resources/icons/backwhite03Ori.png" width="22" height="18" alt="Back"></div>',
                                    //     handler: function () {
                                    //         FloatPanel_AyohaReward_ViewMyRankingHide(false);
                                    //     }
                                    // },
                                    // {
                                    //     margin: '0 0 0 16',
                                    //     id: 'htmlFloatPanel_AyohaReward_ViewMyRanking_TitleHeaderTxt',
                                    //     html: '<div class="lb-title">Leaderboard</div>'
                                    // }
                                ]
                            },
                            {
                                hidden: true,
                                id: 'htmlFloatPanel_AyohaReward_ViewMyRankingHeaderJoinedDate',
                                html: ''
                            },
                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingHeader02',
                                name: 'containerFloatPanel_AyohaReward_ViewMyRankingHeader02_name',
                                margin: '0 18 0 18',
                                cls: 'lb-current-card',
                                layout: {
                                    type: 'hbox',
                                    pack: 'start',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        id: 'htmlRangkingContestantImg',
                                        html: FloatPanel_AyohaReward_ViewMyRankingBuildCurrentUserImage('')
                                    },
                                    {
                                        xtype: 'container',
                                        flex: 1,
                                        margin: '0 0 0 14',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'stretch'
                                        },
                                        items: [
                                            {
                                                xtype: 'container',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'start',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        id: 'htmlYourRangking',
                                                        html: '<div class="lb-current-rank">#0</div>'
                                                    },
                                                    {
                                                        id: 'htmlYourRangkingTxt',
                                                        margin: '0 0 0 10',
                                                        html: '<div class="lb-current-rank-label">Your Rank</div>'
                                                    }
                                                ]
                                            },
                                            {
                                                id: 'htmlRankingAyohaPointCount',
                                                margin: '6 0 0 0',
                                                html: '<div class="lb-current-points">0 APts</div>'
                                            },
                                            {
                                                xtype: 'container',
                                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingAyohaPointTransactionID',
                                                name: 'containerFloatPanel_AyohaReward_ViewMyRankingAyohaPointTransaction',
                                                margin: '14 0 0 0',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'stretch'
                                                },
                                                items: [
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRankingProgress',
                                                        html: '<div class="lb-progress-bar"><div class="lb-progress-fill" style="width:0%;"></div></div>'
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_AyohaReward_ViewMyRankingProgressHint',
                                                        margin: '8 0 0 0',
                                                        html: '<div class="lb-progress-hint">No progress data available</div>'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                margin: '28 18 0 18',
                                html: '<div class="lb-section-title"><span class="lb-section-icon">&#127942;</span><span>Top 3</span></div>'
                            },
                            {
                                id: 'htmlFloatPanel_AyohaReward_ViewMyRankingConfetti',
                                hidden: true,
                                margin: '10 18 -26 18',
                                html: '<div class="lb-confetti-field">' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                    '<span class="lb-confetti-piece"></span>' +
                                '</div>'
                            },
                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingBar',
                                padding: '14 18 0 18',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'end'
                                },
                                items: [
                                    Ext.apply(FloatPanel_AyohaReward_ViewMyRankingBuildPodiumCard('02', 'lb-podium-card lb-podium-side-left lb-podium-enter-left', 'resources/icons/secondRank01.png', 54), { margin: '18 8 0 0' }),
                                    Ext.apply(FloatPanel_AyohaReward_ViewMyRankingBuildPodiumCard('01', 'lb-podium-card lb-podium-card-center lb-podium-enter-center', 'resources/icons/firstRank01.png', 64), { margin: '0 8 0 8' }),
                                    Ext.apply(FloatPanel_AyohaReward_ViewMyRankingBuildPodiumCard('03', 'lb-podium-card lb-podium-side-right lb-podium-enter-right', 'resources/icons/thirdRank01.png', 54), { margin: '18 0 0 8' })
                                ]
                            },
                                {
                                    margin: '30 18 0 18',
                                    html: '<div class="lb-fomo-banner"><div class="lb-fomo-text">*Don&rsquo;t drop from the Top 10,stay ahead to unlock exclusive quarterly prizes&#127873;.</div></div>'
                                },
                            {
                                margin: '16 18 0 18',
                                html: '<div class="lb-section-title"><span class="lb-section-icon">&#8599;</span><span>Near You</span></div>'
                            },
                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaReward_ViewMyRankingListOutter',
                                padding: '18 18 26 18',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'stretch'
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        id: 'containerFloatPanel_AyohaReward_ViewMyRankingList',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'stretch'
                                        },
                                        items: [
                                            FloatPanel_AyohaReward_ViewMyRankingBuildNearRow('01'),
                                            FloatPanel_AyohaReward_ViewMyRankingBuildNearRow('02'),
                                            FloatPanel_AyohaReward_ViewMyRankingBuildNearRow('03'),
                                            FloatPanel_AyohaReward_ViewMyRankingBuildNearRow('04'),
                                            FloatPanel_AyohaReward_ViewMyRankingBuildNearRow('05'),
                                            FloatPanel_AyohaReward_ViewMyRankingBuildNearRow('06'),
                                            FloatPanel_AyohaReward_ViewMyRankingBuildNearRow('07')
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });
}

function FloatPanel_AyohaReward_ViewMyRankingShow() {
    LoadingPanelShow(getLoadingIcon(), 'Loading....');

    FloatPanel_AyohaReward_ViewMyRankingCreateIfNeeded();

    _FloatPanel_AyohaReward_ViewMyRanking.show();

    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
        AyohaBrowserBack.push('FloatPanel_AyohaReward_ViewMyRanking', function () {
            FloatPanel_AyohaReward_ViewMyRankingHide(true);
        });
    }

    isFloatPanel_AyohaReward_ViewMyRankingOpen = 'Y';
    FloatPanel_AyohaReward_ViewMyRankingAdjustHeight();
    FloatPanel_AyohaReward_ViewMyRanking_AyohaRewardPointRewardRankingStore();

    if (Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingHeaderJoinedDate')) {
        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingHeaderJoinedDate').setHtml(
            '<div style="color:#FDFEFE;text-align:center;font-size:9px;width:100%;">Joined Date:' + globalJoinDate + '</div>'
        );
    }

    var summaryContainer = Ext.ComponentQuery.query('container[name=containerFloatPanel_AyohaReward_ViewMyRankingHeader02_name]')[0];
    if (summaryContainer && summaryContainer.element && summaryContainer._ayohaTapBound !== true) {
        summaryContainer._ayohaTapBound = true;
        summaryContainer.element.on('tap', function () {
            FloatPanel_AyohaReward_ContestAdvertisementShow();
        });
    }

    var progressContainer = Ext.ComponentQuery.query('container[name=containerFloatPanel_AyohaReward_ViewMyRankingAyohaPointTransaction]')[0];
    if (progressContainer && progressContainer.element && progressContainer._ayohaTapBound !== true) {
        progressContainer._ayohaTapBound = true;
        progressContainer.element.on('tap', function () {
            FloatPanel_AyohaReward_PointTransactionsShow();
        });
    }
}

function FloatPanel_AyohaReward_ViewMyRankingHide(fromBack, animCfg) {
    if (isFloatPanel_AyohaReward_ViewMyRankingOpen == 'Y') {
        if (animCfg) {
            _FloatPanel_AyohaReward_ViewMyRanking.hide(Ext.fx.Animation(animCfg));
        } else {
            _FloatPanel_AyohaReward_ViewMyRanking.hide();
        }

        isFloatPanel_AyohaReward_ViewMyRankingOpen = 'N';

        if (fromBack !== true && typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
            AyohaBrowserBack.close('FloatPanel_AyohaReward_ViewMyRanking');
        }

        _FloatPanel_AyohaReward_ViewMyRanking.destroy();
        _FloatPanel_AyohaReward_ViewMyRanking = null;
    }
}

function FloatPanel_AyohaReward_ViewMyRankingAdjustHeight() {
    var viewportHeight = parseInt(window.innerHeight, 10);

    if (Ext.getCmp('FloatPanel_AyohaReward_ViewMyRankingID')) {
        Ext.getCmp('FloatPanel_AyohaReward_ViewMyRankingID').setHeight(viewportHeight + 20);
    }
}

function FloatPanel_AyohaReward_ViewMyRankingResetNearRows() {
    var slot;

    for (slot = 1; slot <= 7; slot++) {
        var paddedSlot = slot < 10 ? '0' + slot : '' + slot;
        var rowCmp = Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingNearRow' + paddedSlot);

        if (rowCmp) {
            rowCmp.setHidden(true);
            rowCmp.removeCls('lb-near-row-current');
        }
    }
}

function FloatPanel_AyohaReward_ViewMyRankingResetTopThreeCelebration() {
    var suffixes = ['01', '02', '03'];
    var index;

    for (index = 0; index < suffixes.length; index++) {
        var podiumCmp = Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingPodium' + suffixes[index]);

        if (podiumCmp) {
            podiumCmp.removeCls('lb-podium-card-user');
            podiumCmp.removeCls('lb-podium-card-winning');

            if (podiumCmp._winningTimer) {
                clearTimeout(podiumCmp._winningTimer);
                podiumCmp._winningTimer = null;
            }
        }
    }

    if (Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingConfetti')) {
        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingConfetti').removeCls('lb-confetti-active');
        Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingConfetti').setHidden(true);
    }
}

function FloatPanel_AyohaReward_ViewMyRankingApplyTopThreeCelebration(rank) {
    var suffix = rank < 10 ? '0' + rank : '' + rank;
    var podiumCmp;

    FloatPanel_AyohaReward_ViewMyRankingResetTopThreeCelebration();

    if (!(rank >= 1 && rank <= 3)) {
        return;
    }

    podiumCmp = Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingPodium' + suffix);
    if (podiumCmp) {
        podiumCmp.addCls('lb-podium-card-user');

        if (podiumCmp._winningTimer) {
            clearTimeout(podiumCmp._winningTimer);
        }

        podiumCmp._winningTimer = setTimeout(function () {
            if (podiumCmp && !podiumCmp.destroyed) {
                podiumCmp.addCls('lb-podium-card-winning');
            }
        }, 900);
    }

    if (Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingConfetti')) {
        var confettiCmp = Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingConfetti');

        confettiCmp.setHidden(false);
        confettiCmp.removeCls('lb-confetti-active');
        confettiCmp.addCls('lb-confetti-active');

        if (confettiCmp._confettiTimer) {
            clearTimeout(confettiCmp._confettiTimer);
        }

        confettiCmp._confettiTimer = setTimeout(function () {
            if (confettiCmp && !confettiCmp.destroyed) {
                confettiCmp.removeCls('lb-confetti-active');
                confettiCmp.setHidden(true);
            }
        }, 2400);
    }
}

function FloatPanel_AyohaReward_ViewMyRankingSetPodium(suffix, record, avatarSize) {
    if (!record) {
        return;
    }

    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking' + suffix + '_Image').setHtml(
        FloatPanel_AyohaReward_ViewMyRankingBuildCircleImage(record.Photo, avatarSize, false)
    );
    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRanking' + suffix + '_Name').setHtml(
        '<div class="lb-podium-name">' + FloatPanel_AyohaReward_ViewMyRankingSafeText(record.AccountName) + '</div>'
    );
    FloatPanel_AyohaReward_ViewMyRankingAnimateValue(
        'htmlFloatPanel_AyohaReward_ViewMyRanking' + suffix + '_Txt',
        record.AyohaPoint,
        'lb-podium-points',
        '',
        900
    );
}

function FloatPanel_AyohaReward_ViewMyRankingSetCurrentUserCard(record, pointsGap, targetRank) {
    var progressPercent = 100;
    var progressHint = 'You are at the top of the leaderboard';

    myRankingNo = record.Rank;
    myRankingContestantName = record.AccountName;
    myRankingContestantImge = record.Photo;
    myRankingContestantPoint = record.AyohaPoint;

    Ext.getCmp('htmlRangkingContestantImg').setHtml(
        FloatPanel_AyohaReward_ViewMyRankingBuildCurrentUserImage(record.Photo)
    );
    Ext.getCmp('htmlYourRangking').setHtml('<div class="lb-current-rank">#' + record.Rank + '</div>');
    Ext.getCmp('htmlYourRangkingTxt').setHtml('<div class="lb-current-rank-label">Your Rank</div>');
    FloatPanel_AyohaReward_ViewMyRankingAnimateValue(
        'htmlRankingAyohaPointCount',
        record.AyohaPoint,
        'lb-current-points',
        ' APts',
        950
    );

    if (targetRank > 0 && pointsGap > 0) {
        progressPercent = Math.max(8, Math.min(100, Math.round((record.AyohaPoint / (record.AyohaPoint + pointsGap)) * 100)));
        progressHint = FloatPanel_AyohaReward_ViewMyRankingFormatPoints(pointsGap) + ' pts to overtake #' + targetRank;
    }

    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingProgress').setHtml(
        '<div class="lb-progress-bar"><div class="lb-progress-fill" style="width:' + progressPercent + '%;"></div></div>'
    );
    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingProgressHint').setHtml(
        '<div class="lb-progress-hint">' + progressHint + '</div>'
    );
}

function FloatPanel_AyohaReward_ViewMyRankingSetNonContestantCard() {
    FloatPanel_AyohaReward_ViewMyRankingResetTopThreeCelebration();

    myRankingNo = '-';
    myRankingContestantName = GetAyohaUserAccountNames();
    myRankingContestantImge = GetAyohaUserPicProfile();
    myRankingContestantPoint = 0;

    Ext.getCmp('htmlRangkingContestantImg').setHtml(
        FloatPanel_AyohaReward_ViewMyRankingBuildCurrentUserImage(GetAyohaUserPicProfile())
    );
    Ext.getCmp('htmlYourRangking').setHtml('<div class="lb-current-rank">#-</div>');
    Ext.getCmp('htmlYourRangkingTxt').setHtml('<div class="lb-current-rank-label">Not a Contestant</div>');
    FloatPanel_AyohaReward_ViewMyRankingAnimateValue(
        'htmlRankingAyohaPointCount',
        0,
        'lb-current-points',
        ' APts',
        400
    );
    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingProgress').setHtml(
        '<div class="lb-progress-bar"><div class="lb-progress-fill" style="width:0%;"></div></div>'
    );
    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingProgressHint').setHtml(
        '<div class="lb-progress-hint">Join the contest to appear in the leaderboard</div>'
    );
}

function FloatPanel_AyohaReward_ViewMyRankingSetNearRow(slot, record, isCurrentUser) {
    var rowCmp = Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingNearRow' + slot);
    var displayName = isCurrentUser ? 'You' : FloatPanel_AyohaReward_ViewMyRankingSafeText(record.AccountName);

    if (!rowCmp) {
        return;
    }

    rowCmp.setHidden(false);

    if (isCurrentUser) {
        rowCmp.addCls('lb-near-row-current');
    } else {
        rowCmp.removeCls('lb-near-row-current');
    }

    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingNearRow' + slot + '_Rank').setHtml(
        '<div class="lb-near-rank">#' + record.Rank + '</div>'
    );
    Ext.getCmp('htmlFloatPanel_AyohaReward_ViewMyRankingNearRow' + slot + '_Name').setHtml(
        '<div class="lb-near-name">' + displayName + '</div>'
    );
    FloatPanel_AyohaReward_ViewMyRankingAnimateValue(
        'htmlFloatPanel_AyohaReward_ViewMyRankingNearRow' + slot + '_Points',
        record.AyohaPoint,
        'lb-near-points',
        '',
        700
    );
}

function FloatPanel_AyohaReward_ViewMyRanking_AyohaRewardPointRewardRankingStore() {
    _DataStore_AyohaRewardPointRewardRankingStore.getProxy().setExtraParam('RankingLevel', 'ALL');
     _DataStore_AyohaRewardPointRewardRankingStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardPointRewardRankingStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointRewardRanking');

    _DataStore_AyohaRewardPointRewardRankingStore.load({
        callback: function (records, operation, success) {
            var rankingData = [];
            var currentUserRankIndex = -1;
            var currentUserAccountNo = GetCurrAyohaUserAccountNo();
            var startIndex;
            var endIndex;
            var slotCounter = 1;
            var i;

            FloatPanel_AyohaReward_ViewMyRankingResetNearRows();

            if (!success || !records || records.length === 0) {
                FloatPanel_AyohaReward_ViewMyRankingSetNonContestantCard();
                Ext.defer(function () {
                    LoadingPanelHide(false);
                }, 250);
                return;
            }

            for (i = 0; i < records.length; i++) {
                var storeRecord = records[i];
                var preparedRecord = {
                    Rank: i + 1,
                    AccountName: storeRecord.get('AccountName') || 'Vacant',
                    Photo: storeRecord.get('Photo') || FloatPanel_AyohaReward_ViewMyRankingDefaultAvatar(),
                    AyohaPoint: FloatPanel_AyohaReward_ViewMyRankingNumber(storeRecord.get('AyohaPoint')),
                    SubscriberAccNo: storeRecord.get('SubscriberAccNo')
                };

                rankingData.push(preparedRecord);

                if (preparedRecord.SubscriberAccNo == currentUserAccountNo) {
                    currentUserRankIndex = i;
                }
            }

            FloatPanel_AyohaReward_ViewMyRankingSetPodium('01', rankingData[0], 64);
            FloatPanel_AyohaReward_ViewMyRankingSetPodium('02', rankingData[1], 54);
            FloatPanel_AyohaReward_ViewMyRankingSetPodium('03', rankingData[2], 54);
            FloatPanel_AyohaReward_ViewMyRankingResetTopThreeCelebration();

            if (currentUserRankIndex >= 0) {
                var currentUserRecord = rankingData[currentUserRankIndex];
                var pointsGap = 0;
                var targetRank = 0;

                if (currentUserRankIndex > 0) {
                    pointsGap = Math.max(0, rankingData[currentUserRankIndex - 1].AyohaPoint - currentUserRecord.AyohaPoint);
                    targetRank = rankingData[currentUserRankIndex - 1].Rank;
                }

                FloatPanel_AyohaReward_ViewMyRankingSetCurrentUserCard(currentUserRecord, pointsGap, targetRank);
                FloatPanel_AyohaReward_ViewMyRankingApplyTopThreeCelebration(currentUserRecord.Rank);
            } else {
                FloatPanel_AyohaReward_ViewMyRankingSetNonContestantCard();
            }

            if (currentUserRankIndex >= 0) {
                startIndex = Math.max(0, currentUserRankIndex - 3);
                endIndex = Math.min(rankingData.length - 1, currentUserRankIndex + 3);

                while ((endIndex - startIndex) < 6 && startIndex > 0) {
                    startIndex--;
                }

                while ((endIndex - startIndex) < 6 && endIndex < rankingData.length - 1) {
                    endIndex++;
                }
            } else {
                startIndex = 0;
                endIndex = Math.min(rankingData.length - 1, 6);
            }

            for (i = startIndex; i <= endIndex; i++) {
                var paddedSlot = slotCounter < 10 ? '0' + slotCounter : '' + slotCounter;

                FloatPanel_AyohaReward_ViewMyRankingSetNearRow(
                    paddedSlot,
                    rankingData[i],
                    rankingData[i].SubscriberAccNo == currentUserAccountNo
                );

                slotCounter++;
            }

            Ext.defer(function () {
                LoadingPanelHide(false);
            }, 350);
        }
    });
}


















function stagingCongratulationShow() {
    var task = Ext.create('Ext.util.DelayedTask', function () {
        FloatPanel_AyohaReward_CongratulationsShow();
        Ext.Viewport.setMasked(false);
    });

    task.delay(1000);
}

function stagingCongratulation02Show() {
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var WinnerAnnoucementStatus = localStorage.getItem('WinnerAnnoucementStatus');

        if (WinnerAnnoucementStatus == 'Y') {
            FloatPanel_AyohaReward_CongratulationsShow();
        }
        if (WinnerAnnoucementStatus == 'N') {
            FloatPanel_AyohaReward_ContestAdvertisementShow();
        }

        Ext.Viewport.setMasked(false);
    });

    task.delay(100);
}