# How to use

    $ git clone https://github.com/lezakkaz/DrawSomething.git
    $ cd DrawSomething/examples/RNN_Tutorial/
    $ mkdir rnn_tutorial_dataset
    $ mkdir rnn_tutorial_data
    $ gsutil -m cp "gs://quickdraw_dataset/full/simplified/*" rnn_tutorial_dataset

##

## create_dataset.py

### Mac or Linux

    $ python3 create_dataset.py --ndjson_path rnn_tutorial_dataset \
      --output_path rnn_tutorial_data
    
### Windows

    $ python create_dataset.py --ndjson_path rnn_tutorial_dataset \
      --output_path rnn_tutorial_data

## train_model.py

### Mac or Linux

#### CPU

    python3 train_model.py\
        --training_data=rnn_tutorial_data/training.tfrecord-00000-of-00010\
        --eval_data=rnn_tutorial_data/eval.tfrecord-00000-of-00010\
        --classes_file=rnn_tutorial_data/training.tfrecord.classes\
        --model_dir=/tmp/quickdraw_model/
    
#### GPU
    
    python3 train_model.py\
        --training_data=rnn_tutorial_data/training.tfrecord-00000-of-00010\
        --eval_data=rnn_tutorial_data/eval.tfrecord-00000-of-00010\
        --classes_file=rnn_tutorial_data/training.tfrecord.classes\
        --model_dir=/tmp/quickdraw_model/\
        --cell_type=cudnn_lstm

    
### Windows

#### CPU

    python train_model.py\
        --training_data=rnn_tutorial_data/training.tfrecord-00000-of-00010\
        --eval_data=rnn_tutorial_data/eval.tfrecord-00000-of-00010\
        --classes_file=rnn_tutorial_data/training.tfrecord.classes\
        --model_dir=/tmp/quickdraw_model/
    
#### GPU
    
    python train_model.py\
        --training_data=rnn_tutorial_data/training.tfrecord-00000-of-00010\
        --eval_data=rnn_tutorial_data/eval.tfrecord-00000-of-00010\
        --classes_file=rnn_tutorial_data/training.tfrecord.classes\
        --model_dir=/tmp/quickdraw_model/\
        --cell_type=cudnn_lstm

## How to use Tensorboard

    $ tensorboard --logdir=/tmp/quickdraw_model/eval