import { defineGkdApp } from "@gkd-kit/define";

export default defineGkdApp({
  id: "com.kswx.sspa",
  name: "岁岁平安",
  groups: [
    {
      key: 1,
      name: "功能类-自动签到",
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: "app",
      rules: [
        {
          key: 0,
          name: "点击[签到]",
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            “com.baidu.mobads.sdk.api.MobRewardVideoActivity”，
          ] ,
          匹配：[
            '@[clickable=true] >2 [text="签到"]' ,
            '[id="ad_area"] [id="close_btn"]' ,
            'TextView[text="反馈"] + @ImageView[clickable=true] + TextView' ,
            '[text="查看详情"]' ,
            “ImageView < FrameLayout[childCount=1]”，
            "RelativeLayout >relativeLayout + ImageView + ImageView[clickable=true]" , //name: "未分类-【百度】全屏广告","此规则有概率误触或失败，请选择开启。",
            '[id="android:id/content"] >n RelativeLayout[childCount<=3] > ImageView[clickable=true]',
            "@ImageView[clickable=true] - RelativeLayout > RelativeLayout > ImageView + ImageView",
            'View[desc^="APP最新版本"] > Button[desc="关闭"][clickable=true]',
          ],
          snapshotUrls: [],
        },
        {
          preKeys: [0],
          key: 1,
          name: "点击[我知道了]",
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          ],
          matches: '[text="我知道了"]',
          exampleUrls:
            "https://m.gkd.li/57941037/fd597dc2-b926-44fa-acaf-ec7cfa41813a",
          snapshotUrls: [],
        },
        {
          preKeys: [1],
          key: 2,
          name: "返回",
          action: "back",
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          ],
          matches: '[text="签到规则"]',
          exampleUrls:
            "https://m.gkd.li/57941037/9d445e18-91dc-4e6c-a765-3a1593230d7b",
          snapshotUrls: [],
        },
      ],
      enable: false,
    },
    {
      key: 2,
      name: "更新提示",
      desc: "点击 [返回] 关闭页面",
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: "app",
      rules: [
        {
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          ],
          matches: '@[desc="转到上一层级"] + [text="更新版本"]',
          exampleUrls:
            "https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d",
          snapshotUrls: "https://i.gkd.li/i/14738944",
        },
        {
          matches:
            'View[desc^="APP最新版本"] > Button[desc="关闭"][clickable=true]',
          snapshotUrls: [
            "https://i.gkd.li/i/12888361",
            "https://i.gkd.li/i/12888389",
          ],
        },
      ],
      enable: false,
      order: -9,
    },

    {
      key: 3,
      name: "全屏广告-弹窗广告",
      desc: "点击关闭",
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          ],
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <(2,3) * >(2,3) [text="反馈"]',
          snapshotUrls: [
            "https://i.gkd.li/i/14945552",
            "https://i.gkd.li/i/15286451",
          ],
        },
        {
          key: 1,
          matches:
            '[id="android:id/content"] >3 FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            "https://i.gkd.li/i/14964868",
            "https://i.gkd.li/i/14969910",
          ],
        },
      ],
      enable: false,
    },

    {
      key: 4,
      name: "全屏广告-弹窗广告",
      rules: [
        {
          name: "穿山甲",
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          ],
          matches:
            '@Image[text=""] < View +(n) View >(2) TextView[text="广告"]',
          snapshotUrls: "https://i.gkd.li/i/12706209",
        },
        {
          name: "优量汇",
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          ],
          matches: "ImageView - FrameLayout > ImageView[id=null]",
          snapshotUrls: "https://i.gkd.li/i/12706209",
        },
        {
          name: "百青藤-1",
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          ],
          matches:
            '[id="io.iftech.android.box:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: "https://i.gkd.li/i/12706228",
        },
        {
          name: "百青藤-2",
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          ],
          matches:
            "@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView",
          snapshotUrls: "https://i.gkd.li/i/12706236",
        },
        {
          name: "百青藤-3",
          activityIds: [
            "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          ],
          matches:
            "@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView",
          snapshotUrls: "https://i.gkd.li/i/12706240",
        },
      ],
      enable: false,
    },
    {
      key: 5,
      name: "未分类-优量汇广告",
      activityIds: [
        "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
        "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
      ],
      rules: [
        {
          matches:
            'ImageView - RelativeLayout >(3-n) [id="com.zjwh.android_wh_physicalfitness:id/iv_close"][clickable=true]',
          snapshotUrls: [
            "https://i.gkd.li/i/12673231",
            "https://i.gkd.li/i/12673523",
            "https://i.gkd.li/i/13166472",
          ],
        },
      ],
      enable: false,
    },
    {
      key: 6,
      name: "未分类-百青藤广告",
      activityIds: [
        "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
        "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
      ],
      rules: [
        {
          matches:
            '@[text="跳过"][clickable=true] +(3) RelativeLayout >(2) [text="点击跳转至第三方页面"]',
          snapshotUrls: ["https://i.gkd.li/i/12673349"],
        },
      ],
      enable: false,
    },
    {
      key: 7,
      name: "未分类-快手广告",
      activityIds: [
        “com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity”，
        “com.baidu.mobads.sdk.api.MobRewardVideoActivity”，
      ] ,
      规则：[
        {
          关键: 0 ,
          匹配：
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > [text="跳过"]' ,
          snapshotUrls：“https://i.gkd.li/i/12673495”，
        } ,
        {
          关键：1 ,
          匹配：
            '[id="com.kwad.dy.sdk:id/ksad_tk_view"] >n ViewGroup > @ViewGroup[clickable=true] > ImageView' ,
          快照网址：[
            “https://i.gkd.li/i/12826112”，
            “https://i.gkd.li/i/12826124”，
          ] ,
        } ,
        {
          键：2，
          匹配：
            '[id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"] >n ViewGroup > @ViewGroup[childCount=1] > ImageView' ,
          snapshotUrls: [
            "https://i.gkd.li/i/13228216",
            "https://i.gkd.li/i/13601132",
          ],
        },
      ],
      enable: false,
    },
    {
      key: 8,
      name: "未分类-百度广告",
      activityIds: [
        "com.bytedance.sdk.openadsdk.stub.ativity.Stub_Standard_Portrait_Activity",
        "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
      ],
      actionMaximum: 1,
      resetMatch: "activity",
      matchTime: 10000,
      rules: "@ImageView - RelativeLayout[childCount=9]",
      snapshotUrls: "https://i.gkd.li/i/13554229",
      enable: false,
    },
  ],
});
