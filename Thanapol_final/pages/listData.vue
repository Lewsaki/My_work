<template>
    <div class="container">
        <button class="btn btn-primary my-3" style="font-weight: 500; font-size: 20px;" @click="addStudent">AddStudent</button>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>CODE</th>
                    <th>NAME</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student,count) in students" :key="student.id">
                    <td>{{ count+1 }}</td>
                    <td>{{student.id}}</td>
                    <td>{{student.code}}</td>
                    <td>{{student.name}}</td>
                    <td>
                        <button class="btn btn-warning me-2" @click="editStudent(student)">Edit</button>
                        <button class="btn btn-danger" @click="delStudent(student)">Delete</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>
<script>
import axios from '../lib/axios'
    export default {
        data(){
            let students = []
            for(let i=1;i<=10;i++){
            students.push({
                id:i,
                code:String(i).padStart(4,0),
                name:`Name${i}`
                })
            }
            return{
                students,//students : students
            }
        },
        async mounted(){
            await this.listStudent()
        },
        methods:{
            addStudent(){
                let id = this.students.length+1
                this.students.push({
                    id, //id:id
                    code:String(id).padStart(4,0),
                    name:`Name${id}`,
                })
            },
            delStudent(std){
                console.log(std)
                let idx = this.students.findIndex(x => x.id === std.id)
                this.students.splice(idx,1)
            },
            editStudent(std){
                // this.$router.push('/edit/'+std.id)
                this.$router.push(`/student/${std.code}`)
            },
            async listStudent(){
                try{
                    let result = await axios.get('/api/students')
                    this.students = result.data.students ?? []
                }catch (e){
                    console.log('error',e)
                }
            
        }
        },
        
    }
</script>

