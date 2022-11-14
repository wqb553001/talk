<template>
  <div class="rule">
    <h1>规则</h1>
    <div>
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="rule"
          label="角色"
          width="180"
          rowspan="0"
          colspan="0">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="result"
          label="战绩">
        </el-table-column>
        <el-table-column
          prop="score"
          label="评分">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0 || columnIndex === 1) { // 第一、二列 合并列
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },

      //单元格合并
      objectSpanMethod2({ row, column, rowIndex, columnIndex }) {
        //行，列，行下标，列下标( 控制要合并的列 )
        if ([0, 1, 3].includes(columnIndex)) {
          const _row = this.rowspan[rowIndex];
          const _col = _row > 0 ? 1 : 0; // 如果这一行隐藏了，这列也隐藏
          return {
            rowspan: _row, //合并的行数
            colspan: _col //合并的列数，设为０则直接不显示
          };
        }
      },

    }
  };
</script>
