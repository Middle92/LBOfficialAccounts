<template>
    <div>
        <div class="bg">
            <img class="icon" src="@/assets/imgs/icon08.png" alt="">
        </div>
        <div class="content">
            <div class="head"></div>
            <div class="name">孙晨</div>
            <div class="form-gruop">
                <div class="group">
                    <label for="">投放区域</label>
                    <el-select class="gruop-input" placeholder="请选择投放区域">
                        <el-option value="区域">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.bg {
    height: rem(130);
    background-image: url(../assets/imgs/bg11.png);
    background-size: cover;
    position: relative;
    .icon {
        width: rem(19);
        position: absolute;
        top: rem(15);
        right: rem(16);
    }
}
.content {
    margin-top: rem(-50);
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 rem(38);
    .head {
        display: inline-block;
        width: rem(100);
        height: rem(100);
        border-radius: 50%;
        background-color: #333333;
    }
    .name {
        font-size: rem(21);
        color: $base-background-color;
        margin-top: rem(19);
    }
    .form-gruop {
        width: 100%;
    }
}
</style>

