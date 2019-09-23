<template>
    <div>
        <van-tabs v-model="active" :title="登录/注册">
            <van-tab title="登录">
                <van-cell-group>
                    <van-field
                        v-model="username"
                        required
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('请输入6至12位数的用户名')"
                    />

                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                    <van-button type="primary" size="large">点击登录</van-button>
                </van-cell-group>
            </van-tab>
            <van-tab title="注册">
                <van-cell-group>
                    <van-field
                        v-model="username"
                        required
                        label="用户名"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('请输入6至12位数的用户名')"
                    />
                    <van-field
                        v-model="username"
                        required
                        label="昵称"
                        placeholder="请输入昵称"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请确认密码"
                        required
                    />
                    <van-button type="primary" size="large" color="#7232dd">点击注册</van-button>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>